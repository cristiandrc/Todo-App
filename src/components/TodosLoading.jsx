import React from "react";
import "../styles/TodosLoading.css";
import { MdDelete, MdCheck } from "react-icons/md";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon">
        <MdCheck />
      </span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon">
        <MdDelete />
      </span>
    </div>
  );
}

export { TodosLoading };
