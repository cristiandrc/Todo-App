import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = ({ total, completed }) => {
  return (
    <h2 className="todo-counter">
      Has Completado <span>{total}</span> de <span>{completed}</span> TODOs
    </h2>
  );
};

export { TodoCounter };
