import React from "react";
import "../styles/EmptyTodos.css";
function EmptyTodos() {
  return (
    <p className="empty-p">
      Aun no tienes tareas <br /> ¡Crea tu primer Tarea!
    </p>
  );
}

export { EmptyTodos };
