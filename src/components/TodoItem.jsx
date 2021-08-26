import React from "react";
import "../styles/TodoItem.css";
import { MdDelete, MdCheck } from "react-icons/md";

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className="todoItem-container">
      <span
        className={`icon todoItem-check ${
          completed && "todoItem-check__completed"
        }`}
        onClick={onComplete}
      >
        <MdCheck />
      </span>{" "}
      <p className={`todoItem-p ${completed && "todoItem-p__completed"} `}>
        {text}
      </p>{" "}
      <span className=" icon todoItem-delete" onClick={onDelete}>
        <MdDelete />
      </span>{" "}
    </li>
  );
};

export { TodoItem };
