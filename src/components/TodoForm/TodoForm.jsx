import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodosForm.css";
import useField from "../../Hooks/useField";

const TodoForm = () => {
  const newTask = useField({ type: "text" });
  const { addTask, setOpenModal } = useContext(TodoContext);
  const [placeholder, setPlaceholder] = useState("Comprar el mercado");

  const onCancel = () => {
    setOpenModal((state) => !state);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask.value) {
      addTask(newTask.value);
      onCancel();
    } else {
      setPlaceholder("Porfa ingresa una tarea para poder Añadir :)");
    }
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label htmlFor="">Escribe tu nuevo TODO</label>
      <textarea {...newTask} placeholder={placeholder} />
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
