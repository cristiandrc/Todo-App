import React from "react";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = () => {
  const onClickButton = () => {
    alert("hola");
  };

  return (
    <button className="todoButton" onClick={onClickButton}>
      +
    </button>
  );
};

export { CreateTodoButton };
