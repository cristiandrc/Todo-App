import React, { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import "../styles/TodosForm.css";

const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [placeholder, setPlaceholder] = useState("Comprar el mercado");

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal((e) => !e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTodoValue) {
      addTodo(newTodoValue);
      onCancel();
    } else {
      setPlaceholder("Porfa ingresa una tarea para poder Añadir :)");
    }
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label htmlFor="">Escribe tu nuevo TODO</label>
      <textarea
        onChange={onChange}
        value={newTodoValue}
        placeholder={placeholder}
      />
      <div>
        <button
          className="TodoForm_Button TodoForm_Button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button className="TodoForm_Button TodoForm_Button--add" type="submit">
          Añadir
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
