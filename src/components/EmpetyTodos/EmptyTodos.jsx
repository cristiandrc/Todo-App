import React from "react";
import "./EmptyTodos.css";
function EmptyTodos() {
  return (
    <p className="empty-p">
      You don't have task, <br /> Create your first task!
    </p>
  );
}

export { EmptyTodos };
