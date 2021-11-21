import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import "./navMenu.css";

const NavMenu = ({ click, isOpen }) => {
  const { auth, deleteAuth } = useContext(TodoContext);
  console.log(auth);
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
            <button onClick={deleteAuth}>Log out</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavMenu;
