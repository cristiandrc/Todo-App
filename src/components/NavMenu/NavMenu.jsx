import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./navMenu.css";

const NavMenu = ({ click, isOpen }) => {
  const { deleteAuth } = useContext(TodoContext);

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
            <Link to="/change-password">Change Password</Link>
          </li>
          <li className="nav-li">
            <button onClick={deleteAuth}>Log out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
