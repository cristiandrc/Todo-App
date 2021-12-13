import React, { useContext, useEffect } from "react";

import { TodoCounter } from "../../components/TodoCounter/TodoCounter";
import { TodoSearch } from "../../components/TodoSearch/TodoSearch";
import { TodoItem } from "../../components/TodoItem/TodoItem";
import { TodoList } from "../../components/TodoList/TodoList";
import { CreateTodoButton } from "../../components/CreateTodoButton/CreateTodoButton";
import { TodoContext } from "../../Context/TodoContext";
import { Modal } from "../../components/Modal/Modal";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import { TodosError } from "../../components/TodoError/TodosError";
import { TodosLoading } from "../../components/TodosLoading/TodosLoading";
import { EmptyTodos } from "../../components/EmpetyTodos/EmptyTodos";
import { Menu } from "../../components/Menu/Menu";
// import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./home.css";

const Home = () => {
  const {
    error,
    loading,
    getTask,
    task,
    filterTask,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
    setFilterStatus,
  } = useContext(TodoContext);

  useEffect(() => {
    getTask("true");
  }, []);
  return (
    <main className="main-container">
      <TodoCounter />
      <Menu setFilter={setFilterStatus} />
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading &&
          new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {!error && !loading && !task.length && <EmptyTodos />}

        {filterTask.map((item) => (
          <TodoItem
            key={item._id}
            {...item}
            onComplete={() => completeTask(item._id, item.completed)}
            onDelete={() => deleteTask(item._id)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </main>
  );
};

export default Home;
