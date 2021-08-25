import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = useContext(TodoContext);
  return (
    <h2 className="todo-counter">
      Has Completado <span>{completedTodos}</span> de <span>{totalTodos}</span>{" "}
      TAREAS
    </h2>
  );
};

export { TodoCounter };
