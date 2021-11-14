import React, { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";
import useSessionStorage from "../Hooks/useSessionStorage";

const TodoContext = React.createContext();
const TodoProvider = (props) => {
  const [todos, saveTodos, loading, error] = useLocalStorage("TODOS_V1", []);
  const [auth, saveAuth] = useSessionStorage();
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const getFilter = (id) => {
    if (id === "All") {
      return todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else if (id === "Active") {
      const newFilter = todos.filter((todo) => todo.completed === false);
      return newFilter.filter((filter) =>
        filter.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else if (id === "Completed") {
      const newFilter = todos.filter((todo) => todo.completed === true);
      return newFilter.filter((filter) =>
        filter.text.toLowerCase().includes(searchValue.toLowerCase())
      );
    } else {
      return null;
    }
  };

  //Filtros
  const filterTodos = getFilter("All");
  const filterActive = getFilter("Active");
  const filterCompleted = getFilter("Completed");

  //-------------------

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodo = [...todos];

    newTodo.push({
      text: text,
      completed: false,
    });

    saveTodos(newTodo);
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
        completedTodos,
        openModal,
        setOpenModal,
        addTodo,
        todos,
        getFilter,
        filterTodos,
        filterActive,
        filterCompleted,
        auth,
        saveAuth,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
