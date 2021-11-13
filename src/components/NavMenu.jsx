import React from "react";
import { Link } from "react-router-dom";
import "./styles/navMenu.css";
const NavMenu = ({ click, isOpen }) => {
  return (
    <div className={`menu-container ${isOpen && "open"}`}>
      <button className="nav-button" onClick={click}>
        X
      </button>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li">
            <Link to="/login">Login</Link>
          </li>
          <li className="nav-li">
            <Link to="/resetPassword">Change Password</Link>
          </li>
          <li className="nav-li">
            <Link to="/login">Log out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
