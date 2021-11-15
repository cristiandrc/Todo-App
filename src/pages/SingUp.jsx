import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../Context/TodoContext";
import Form from "../components/Form";

const SingUp = () => {
  const { error, createAccount } = useContext(TodoContext);
  const navigate = useNavigate();

  const submit = async (data) => {
    const rta = await createAccount(data);
    if (rta.name) navigate("/login");
  };

  return (
    <>
      {error && <span>error</span>}
      <Form singUp submit={submit} />
      <Link to="/login">LOGIN</Link>
    </>
  );
};

export default SingUp;
