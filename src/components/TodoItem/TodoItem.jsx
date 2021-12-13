import React, { useState } from "react";
import { MdDelete, MdCheck } from "react-icons/md";
import "./TodoItem.css";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
const TodoItem = ({ task, completed, onComplete, onDelete }) => {
  const [status] = useLocalStorage("statusFilter", "Active");

  const [loading, setLoading] = useState(false);

  const competed = async () => {
    setLoading(true);
    const isCompleted = await onComplete();
    isCompleted && status === "All" && setLoading(false);
  };

  const deleted = () => {
    setLoading(true);
    onDelete();
  };
  return (
    <li className={`todoItem-container `}>
      <span className={`${loading && "todoItem-loading"}`}></span>
      <span
        className={`icon todoItem-check ${
          completed && "todoItem-check__completed"
        }`}
        onClick={competed}
      >
        {completed && <MdCheck />}
      </span>
      <p className={`todoItem-p ${completed && "todoItem-p__completed"} `}>
        {task}
      </p>
      {completed && (
        <span className=" icon todoItem-delete" onClick={deleted}>
          <MdDelete />
        </span>
      )}
    </li>
  );
};

export { TodoItem };
