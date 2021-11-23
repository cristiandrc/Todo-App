import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodoCounter.css";

const TodoCounter = () => {
  const { task } = useContext(TodoContext);

  return (
    <div className="counter-container">
      <p className="todo-counter">
        <span>{task.length}</span> Task
      </p>
      <progress
        className="counter-progress"
        max={task.length}
        value={task.filter((e) => e.completed).length}
      />
    </div>
  );
};

export { TodoCounter };
