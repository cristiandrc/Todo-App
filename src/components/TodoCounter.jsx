import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="todo-counter">
      Has Completado <span>{totalTodos}</span> de <span>{completedTodos}</span>{" "}
      TODOs
    </h2>
  );
};

export { TodoCounter };
