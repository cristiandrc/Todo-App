import { useState } from "react";
import { MdDelete, MdCheck } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({ task, completed, onComplete, onDelete }) => {
  const [loading, setLoading] = useState(false);

  const competed = async () => {
    setLoading(true);
    const isCompleted = await onComplete();
    isCompleted && setLoading(false);
  };

  const deleted = async () => {
    setLoading(true);
    const isCompleted = await onDelete();
    isCompleted && setLoading(false);
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
      <span className=" icon todoItem-delete" onClick={deleted}>
        <MdDelete />
      </span>
    </li>
  );
};

export { TodoItem };
