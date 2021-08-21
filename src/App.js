import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todo = [
  { text: "nada1", completed: false },
  { text: "nada2", completed: false },
  { text: "nada3", completed: false },
  { text: "nada4", completed: true },
];

function App() {
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {todo.map((item, i) => (
          <TodoItem key={i} {...item} />
        ))}
      </TodoList>

      <CreateTodoButton />
    </>
  );
}

export default App;
