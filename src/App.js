import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { CreateTodoButton } from "./components/CreateTodoButton";

const todo = [
  { text: "nada1", estado: false },
  { text: "nada2", estado: false },
  { text: "nada3", estado: false },
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
