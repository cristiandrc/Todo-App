import React, { useRef, useEffect } from "react";
import { useLocalStorage } from "../../Hooks/useLocalStorage";
import "./menu.css";

const Menu = ({ setFilter }) => {
  const [status, saveStatus] = useLocalStorage("statusFilter", "Active");
  const All = useRef();
  const Active = useRef();
  const Completed = useRef();

  useEffect(() => {
    setFilter(status);
    switch (status) {
      case "All":
        All.current.setAttribute("active", "page");
        break;
      case "Active":
        Active.current.setAttribute("active", "page");
        break;

      case "Completed":
        Completed.current.setAttribute("active", "page");
        break;
      default:
        break;
    }
  }, []);

  const handleClick = (e) => {
    All.current.removeAttribute("active");
    Active.current.removeAttribute("active");
    Completed.current.removeAttribute("active");
    e.target.setAttribute("active", "page");
    setFilter(e.target.getAttribute("filter"));
    saveStatus(e.target.getAttribute("filter"));
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
