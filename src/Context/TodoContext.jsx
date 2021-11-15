import React, { useState } from "react";
import useSessionStorage from "../Hooks/useSessionStorage";
const URL = "https://vast-badlands-07993.herokuapp.com/api/v1/task";
const URL_auth = "https://vast-badlands-07993.herokuapp.com/api/v1/auth";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [auth, saveAuth, deleteAuth] = useSessionStorage();
  const [task, setTask] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const totalTodos = task.length;

  //-------------------
  const getTask = async () => {
    try {
      const res = await fetch(URL, {
        method: "GET",
        headers: { Authorization: `BEARER ${auth.token}` },
        mode: "cors",
      });
      const result = await res.json();

      setTask(result);
      setError(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(true);
      setLoading(false);
    }
  };
  const completeTask = async (id, completed) => {
    try {
      // setLoading(true);
      const res = await fetch(URL, {
        method: "PATCH",
        headers: {
          Authorization: `BEARER ${auth.token}`,
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({
          id: id,
          data: { completed: !completed },
        }),
      });
      const result = await res.json();
      getTask();
      console.log(result);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(URL, {
        method: "DELETE",
        headers: {
          Authorization: `BEARER ${auth.token}`,
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ taskId: id }),
      });
      const result = await res.json();
      console.log(result);
      getTask();
    } catch (error) {
      setError(true);
      console.error(error.message);
    }
  };

  const addTask = async (task) => {
    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          Authorization: `BEARER ${auth.token}`,
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ task }),
      });
      const result = await res.json();
      console.log(result);
      getTask();
    } catch (error) {
      setError(true);
      console.error(error.message);
    }
  };

  const changePassword = async ({ password, newPassword }) => {
    try {
      const res = await fetch(`${URL_auth}/change-password`, {
        method: "POST",
        headers: {
          Authorization: `BEARER ${auth.token}`,
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ password, newPassword }),
      });
      const result = await res.json();
      console.log(result);
      if (result.modifiedCount) {
        saveAuth({ isAuth: false, token: null, user: null });
      }
    } catch (error) {
      setError(true);
      console.error(error.message);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completeTask,
        getTask,
        searchValue,
        setSearchValue,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
        task,
        auth,
        saveAuth,
        deleteAuth,
        changePassword,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
