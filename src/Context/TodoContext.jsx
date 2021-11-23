import React, { useState, useEffect } from "react";
import useSessionStorage from "../Hooks/useSessionStorage";

const URL = "https://vast-badlands-07993.herokuapp.com/api/v1/task";
const URL_USER = "https://vast-badlands-07993.herokuapp.com/api/v1/user";
const URL_auth = "https://vast-badlands-07993.herokuapp.com/api/v1/auth";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [auth, saveAuth, deleteAuth] = useSessionStorage();
  const [task, setTask] = useState([]);
  const [filterTask, setFilterTask] = useState([]);

  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getFilterTask();
  }, [searchValue, task]);

  const getFilterTask = () => {
    if (searchValue) {
      const filter = task.filter(({ task }) => {
        return task.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilterTask(filter);
    } else setFilterTask(task);
  };

  const login = async ({ email, password }) => {
    try {
      setError(false);
      setAuthLoading(true);
      const response = await fetch(`${URL_auth}/login`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const rta = await response.json();

      if (rta.token) {
        saveAuth({ isAuth: true, token: rta.token, user: rta.user });
      }
      if (rta.statusCode === 401) setError(true);
      setAuthLoading(false);
      console.log(rta);
      return rta;
    } catch (error) {
      setAuthLoading(false);
      setError(true);
      console.error(error.message);
    }
  };
  //-------------------
  const getTask = async (isTrue) => {
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

      getTask();
      return result;
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

  const createAccount = async ({ name, email, password }) => {
    try {
      setAuthLoading(true);
      setError(false);
      const res = await fetch(URL_USER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ name, email, password }),
      });
      const result = await res.json();
      if (result.statusCode === 400) {
        throw new Error("Bad Request");
      }
      setAuthLoading(false);
      console.log(result);
      return result;
    } catch (error) {
      setAuthLoading(false);
      console.log("hola");
      setError(error);
      console.error(error.message);
    }
  };
  const changePassword = async ({ password, newPassword }) => {
    try {
      setError(false);
      setAuthLoading(true);
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
      setAuthLoading(false);

      if (result.statusCode === 401 || result.statusCode === 400) {
        return setError(true);
      }

      console.log(result);
      if (result.modifiedCount) {
        saveAuth({ isAuth: false, token: null, user: null });
      }
    } catch (error) {
      setAuthLoading(false);
      setError(true);
      console.error(error.message);
    }
  };

  const sendEmail = async ({ email }) => {
    try {
      setAuthLoading(true);
      setError(false);
      const res = await fetch(`${URL_auth}/recovery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ email }),
      });
      const result = await res.json();

      setAuthLoading(false);

      if (result.statusCode === 401 || result.statusCode === 400) {
        return setError(true);
      }

      return result;
    } catch (error) {
      setAuthLoading(false);
      setError(error);
      console.error(error.message);
    }
  };

  const recoveryPassword = async ({ password, token }) => {
    try {
      setAuthLoading(true);
      setError(false);
      const res = await fetch(`${URL_auth}/recovery-password`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify({ newPassword: password, token }),
      });
      const result = await res.json();
      if (result.statusCode === 401 || result.statusCode === 400) {
        throw new Error("error 400 o 401");
      }
      console.log(result);
      setAuthLoading(false);
      return result;
    } catch (error) {
      setAuthLoading(false);
      setError(true);
    }
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        getFilterTask,
        completeTask,
        getTask,
        searchValue,
        setSearchValue,
        deleteTask,
        openModal,
        setOpenModal,
        addTask,
        task,
        filterTask,
        login,
        authLoading,
        auth,
        saveAuth,
        deleteAuth,
        changePassword,
        createAccount,
        sendEmail,
        recoveryPassword,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
