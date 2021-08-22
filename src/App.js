import React, { useContext } from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

import { TodoContext } from "./Context/TodoContext";

function App() {
  const { loading, error, completeTodo, filterTodos, deleteTodos } =
    useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>error </p>}
        {loading && <p>Estamos cargando</p>}
        {!loading && !filterTodos.length && <p>Crea tu primer todo</p>}

        {filterTodos.map((item, i) => (
          <TodoItem
            key={i}
            {...item}
            onComplete={() => completeTodo(item.text)}
            onDelete={deleteTodos}
          />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
