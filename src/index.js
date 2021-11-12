import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import "./index.css";
import { TodoProvider } from "./Context/TodoContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <TodoProvider>
      <App />
    </TodoProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
