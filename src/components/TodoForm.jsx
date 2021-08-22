import React, { useState, useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
const TodoForm = () => {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  };

  const onCancel = () => {
    setOpenModal((e) => !e);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    onCancel();
  };
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="">...</label>
      <textarea
        onChange={onChange}
        value={newTodoValue}
        placeholder="comprar el mercado"
      />
      <div>
        <button type="button" onClick={onCancel}>
          Cancelar
        </button>
        <button type="submit">Añadir</button>
      </div>
    </form>
  );
};

export { TodoForm };
