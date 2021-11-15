import { useContext, useEffect } from "react";

import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoItem } from "../components/TodoItem";
import { TodoList } from "../components/TodoList";
import { CreateTodoButton } from "../components/CreateTodoButton";
import { TodoContext } from "../Context/TodoContext";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { TodosError } from "../components/TodosError";
import { TodosLoading } from "../components/TodosLoading";
import { EmptyTodos } from "../components/EmptyTodos";
// import { Menu } from "../components/Menu";

const Home = () => {
  const {
    error,
    loading,
    getTask,
    task,
    completeTask,
    deleteTask,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);

  useEffect(() => {
    getTask();
  }, []);
  return (
    <>
      <TodoCounter />
      {/* <Menu getFilter={setStateFilter} /> */}
      <TodoSearch />
      <TodoList>
        {error && <TodosError />}
        {loading &&
          new Array(5).fill(1).map((a, i) => <TodosLoading key={i} />)}
        {!error && !loading && !task.length && <EmptyTodos />}

        {task.map((item) => (
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
    </>
  );
};

export default Home;
