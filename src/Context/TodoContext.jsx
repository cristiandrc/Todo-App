import React, { useState } from "react";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const TodoContext = React.createContext();

const TodoProvider = (props) => {
  const [todos, saveTodos, loading, error] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

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
        filterTodos,
        deleteTodos,
        completedTodos,
        openModal,
        setOpenModal,
        addTodo,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
