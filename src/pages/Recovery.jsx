import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from "../components/Form/Form";
import { TodoContext } from "../Context/TodoContext";

const Recovery = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { recoveryPassword } = useContext(TodoContext);
  console.log(token);
  const onClick = async ({ password }) => {
    const rta = await recoveryPassword({ password, token });
    if (rta.modifiedCount) navigate("/login");
  };
  return (
    <>
      <Form submit={onClick} />
    </>
  );
};

export default Recovery;
