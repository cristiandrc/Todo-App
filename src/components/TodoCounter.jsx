import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  return (
    <h2 className="todo-counter">
      Has Completado <span>2</span> de <span>4</span> TODOs
    </h2>
  );
};

export { TodoCounter };
