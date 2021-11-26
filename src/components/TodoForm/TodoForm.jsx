import React, { useState, useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./TodosForm.css";
import useField from "../../Hooks/useField";

const TodoForm = () => {
  const newTask = useField({ type: "text" });
  const { addTask, setOpenModal } = useContext(TodoContext);
  const [placeholder, setPlaceholder] = useState("Buy clothes");

  const onCancel = () => {
    setOpenModal((state) => !state);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (newTask.value) {
      addTask(newTask.value);
      onCancel();
    } else {
      setPlaceholder("please write a task to be able to add it :)");
    }
  };
  return (
    <form className="TodoForm" onSubmit={onSubmit}>
      <label htmlFor="">Write your new task</label>
      <textarea {...newTask} placeholder={placeholder} />
      <div>
        <button
          className="TodoForm_Button TodoForm_Button--cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button className="TodoForm_Button TodoForm_Button--add" type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export { TodoForm };
