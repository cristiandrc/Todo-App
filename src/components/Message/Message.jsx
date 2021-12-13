import React from "react";
import { Modal } from "../Modal/Modal";
import "./message.css";

const Message = ({ message, title, onClick, error, btnMessage }) => {
  return (
    <Modal>
      <div className={`message-container ${error && "error"}`}>
        <h4>{title}</h4>
        <p>{message}</p>
        <button className="message-button" onClick={onClick}>
          {btnMessage}
        </button>
      </div>
    </Modal>
  );
};

export default Message;
