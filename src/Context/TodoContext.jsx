import React, { useState } from "react";
import useSessionStorage from "../Hooks/useSessionStorage";
const URL = "https://vast-badlands-07993.herokuapp.com/api/v1/task";

const TodoContext = React.createContext();
const TodoProvider = (props) => {
  const [auth, saveAuth] = useSessionStorage();
  const [task, setTask] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const totalTodos = task.length;

  //-------------------
  const getTask = async (token) => {
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
  const completeTodo = (text) => {
    const todoIndex = task.findIndex((todo) => todo.text === text);
    const newTodos = [...task];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTask(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = task.findIndex((todo) => todo.text === text);
    const newTodos = [...task];
    newTodos.splice(todoIndex, 1);
    setTask(newTodos);
  };

  const addTodo = (text) => {
    const newTodo = [...task];

    newTodo.push({
      text: text,
      completed: false,
    });

    setTask(newTodo);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completeTodo,
        searchValue,
        setSearchValue,
        deleteTodos,
        openModal,
        setOpenModal,
        addTodo,
        task,
        auth,
        saveAuth,
        getTask,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
