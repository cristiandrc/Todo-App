import React, { useContext } from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { TodoContext } from "./Context/TodoContext";
import { Modal } from "./components/Modal";
import { TodoForm } from "./components/TodoForm";
import { TodosError } from "./components/TodosError";
import { TodosLoading } from "./components/TodosLoading";
import { EmptyTodos } from "./components/EmptyTodos";
import { Menu } from "./components/Menu";

function App() {
  const {
    loading,
    error,
    completeTodo,
    filterTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    todos,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <Menu />
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading &&
          new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {!loading && !todos.length && <EmptyTodos />}

        {filterTodos.map((item, i) => (
          <TodoItem
            key={i}
            {...item}
            onComplete={() => completeTodo(item.text)}
            onDelete={deleteTodos}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}

export default App;
