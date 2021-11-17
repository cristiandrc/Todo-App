import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import Form from "../components/Form/Form";

const ChangePassword = () => {
  const { changePassword } = useContext(TodoContext);
  return <Form isChangePassword submit={changePassword} />;
};

export default ChangePassword;
