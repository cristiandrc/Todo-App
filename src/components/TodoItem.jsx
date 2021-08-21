import React from "react";
import "../styles/TodoItem.css";

const TodoItem = ({ text, completed }) => {
  return (
    <li className="todoItem-container">
      <span
        className={`icon todoItem-check ${
          completed && "todoItem-check__completed"
        }`}
      >
        ᄼ
      </span>{" "}
      <p className={`todoItem-p ${completed && "todoItem-p__completed"} `}>
        {text}
      </p>{" "}
      <span className=" icon todoItem-delete">X</span>{" "}
    </li>
  );
};

export { TodoItem };
