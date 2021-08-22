import React, { useState } from "react";

import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

const defaultTodo = [
  { text: "nada1", completed: false },
  { text: "nada2", completed: false },
  { text: "nada3", completed: false },
  { text: "nada4", completed: true },
];

function App() {
  const [todos, setTodos] = useState(defaultTodo);
  const [searchValue, setSearchValue] = useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;

  const filterTodos = todos.filter((todo) => {
    return todo.text.toLowerCase().includes(searchValue.toLowerCase());
  });

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;

    setTodos(newTodos);
  };

  const deleteTodos = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <TodoCounter total={totalTodos} completed={completedTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
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
