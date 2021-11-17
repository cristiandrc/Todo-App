import React, { useContext } from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { TodoContext } from "../../Context/TodoContext";

const Modal = ({ children }) => {
  const { setOpenModal } = useContext(TodoContext);
  const handleClick = (e) => {
    if (e.target.className === "ModalBackground") {
      setOpenModal((estado) => !estado);
    }
  };

  return ReactDOM.createPortal(
    <div className="ModalBackground" onClick={handleClick}>
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export { Modal };
