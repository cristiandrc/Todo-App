import React from "react";
import "../styles/TodoList.css";

const TodoList = ({ children }) => {
  return (
    <section className="Todo-list_container">
      <ul>{children}</ul>
    </section>
  );
};

export { TodoList };
