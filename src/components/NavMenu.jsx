import React from "react";
import { Link } from "react-router-dom";
import "./styles/navMenu.css";
const NavMenu = () => {
  return (
    <div className="menu-container">
      <nav className="">
        <ul className="menu-lu">
          <li className="menu-li">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-li">
            <Link to="/login">Login</Link>
          </li>
          <li className="menu-li">
            <Link to="/resetPassword">Change Password</Link>
          </li>
          <li className="menu-li">
            <Link to="/login">Log out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
