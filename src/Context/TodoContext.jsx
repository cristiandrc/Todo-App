import React, { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [todos, saveTodos, loading, error] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [filterTodos, setFilterTodos] = useState([]);
  const [stateFilter, setStateFilter] = useState("");
  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const getFilter = (id = stateFilter) => {
    let filter;
    if (id === "All") {
      filter = todos.filter((todo) => {
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
      });
      setStateFilter("All");
    } else if (id === "Active") {
      filter = todos.filter((todo) => todo.completed === false);
      setStateFilter("Active");
    } else if (id === "Completed") {
      filter = todos.filter((todo) => todo.completed === true);
      setStateFilter("Completed");
    } else {
      return null;
    }
    setFilterTodos(filter);
  };

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
    getFilter();
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
    getFilter();
  };

  const addTodo = (text) => {
    const newTodo = [...todos];

    newTodo.push({
      text: text,
      completed: false,
    });

    saveTodos(newTodo);
    getFilter();
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
        filterTodos,
        deleteTodos,
        completedTodos,
        openModal,
        setOpenModal,
        addTodo,
        todos,
        getFilter,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
