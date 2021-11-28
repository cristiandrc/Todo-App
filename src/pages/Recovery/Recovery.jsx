import { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import { TodoContext } from "../../Context/TodoContext";
import "./recovery.css";

const Recovery = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { error, authLoading, recoveryPassword } = useContext(TodoContext);

  const onClick = async ({ password }) => {
    const rta = await recoveryPassword({ password, token });
    if (rta?.modifiedCount) navigate("/login");
  };
  return (
    <section className="recovery-container">
      <Logo />
      <h2 className="recovery-title">Recovery</h2>
      {error && <p>Error</p>}
      {authLoading && <Loading />}
      <Form submit={onClick} value="Recovery" />
      <BackgroundFigure />
    </section>
  );
};

export default Recovery;
