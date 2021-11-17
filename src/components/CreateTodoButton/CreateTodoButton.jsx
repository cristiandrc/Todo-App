import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./CreateTodoButton.css";

const CreateTodoButton = () => {
  const { openModal, setOpenModal } = useContext(TodoContext);
  const handleClick = () => {
    setOpenModal((estado) => !estado);
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
