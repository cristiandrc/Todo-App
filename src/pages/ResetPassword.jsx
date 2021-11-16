import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "../components/Form";
import { TodoContext } from "../Context/TodoContext";

const ResetPassword = () => {
  const { sendEmail } = useContext(TodoContext);
  const navigate = useNavigate();

  const submit = async (data) => {
    const rta = await sendEmail(data);
    rta && navigate("/login");
  };
  return (
    <>
      <Form resetPassword submit={submit} />
      <Link to="/login">LOGIN</Link>
    </>
  );
};

export default ResetPassword;
