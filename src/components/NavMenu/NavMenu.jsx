import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./navMenu.css";
import BackgroundFigure from "../BackgroundFigure/BackgroundFigure";

const NavMenu = ({ click, isOpen }) => {
  const { auth, deleteAuth } = useContext(TodoContext);
  return (
    <div className={`menu-container ${isOpen && "open"}`}>
      <button className="nav-button" onClick={click}>
        <span className="nav-button-arrow"></span>
      </button>
      <h2>{auth?.user?.name}</h2>
      <nav className="nav">
        <ul className="nav-ul">
          <li className="nav-li" onClick={click}>
            <Link to="/">Home</Link>
          </li>
          <li className="nav-li" onClick={click}>
            <Link to="/change-password">Change Password</Link>
          </li>
          <li className="nav-li">
            <button className="nav-logOut" onClick={deleteAuth}>
              Log out
            </button>
          </li>
        </ul>
      </nav>

      <p className="menu-by">
        By{" "}
        <a target="_blank" href="https://cristiandrc.dev/">
          cristiandrc.dev
        </a>
      </p>
      <BackgroundFigure two />
    </div>
  );
};

export default NavMenu;
