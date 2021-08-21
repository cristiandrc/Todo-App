import React from "react";

const TodoList = ({ children }) => {
  return (
    <section>
      <ul>{children}</ul>
    </section>
  );
};

export { TodoList };
