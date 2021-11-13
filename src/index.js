import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./index.css";
import { TodoProvider } from "./Context/TodoContext.jsx";

ReactDOM.render(
  <>
    <TodoProvider>
      <App />
    </TodoProvider>
  </>,
  document.getElementById("root")
);
