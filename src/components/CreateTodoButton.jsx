import React, { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import "../styles/CreateTodoButton.css";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);
  const handleClick = () => {
    setOpenModal(!openModal);
  };

  return (
    <button
      className={`todoButton ${openModal && "open"}`}
      onClick={handleClick}
    >
      +
    </button>
  );
};

export { CreateTodoButton };
