import React, { useRef, useContext, useEffect } from "react";
// import { TodoContext } from "../Context/TodoContext";
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
          All
        </li>
        <li ref={Active} filter="Active" onClick={handleClick}>
          Active
        </li>
        <li ref={Completed} filter="Completed" onClick={handleClick}>
          Completed
        </li>
      </ul>
    </nav>
  );
};

export { Menu };
