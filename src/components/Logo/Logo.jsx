import { MdCheck } from "react-icons/md";
import "./logo.css";
const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-check-container">
        <MdCheck size="30" />
      </div>
      <h2>ToDo APP</h2>
    </div>
  );
};

export default Logo;
