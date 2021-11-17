import React, { useRef, useEffect } from "react";
import "../styles/Menu.css";
const Menu = ({ getFilter }) => {
  const All = useRef();
  const Active = useRef();
  const Completed = useRef();

  useEffect(() => {
    setTimeout(() => {
      Active.current.click();
    }, 2002);
  }, []);

  const handleClick = (e) => {
    All.current.removeAttribute("active");
    Active.current.removeAttribute("active");
    Completed.current.removeAttribute("active");
    e.target.setAttribute("active", "page");
    getFilter(e.target.getAttribute("filter"));
  };

  return (
    <nav className="menu-nav">
      <ul className="menu-ul">
        <li ref={All} filter="All" onClick={handleClick}>
          Todos
        </li>
        <li ref={Active} filter="Active" onClick={handleClick}>
          Activos
        </li>
        <li ref={Completed} filter="Completed" onClick={handleClick}>
          Completos
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
