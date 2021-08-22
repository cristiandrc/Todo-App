import React from "react";
import "../styles/TodosLoading.css";

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      <span className="LoadingTodo-completeIcon">ᄼ</span>
      <p className="LoadingTodo-text">Cargando TODOs...</p>
      <span className="LoadingTodo-deleteIcon">X</span>
    </div>
  );
}

export { TodosLoading };
