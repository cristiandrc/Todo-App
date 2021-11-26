import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import { TodoContext } from "../../Context/TodoContext";
import "./resetPassword.css";

const ResetPassword = () => {
  const { sendEmail, error, authLoading } = useContext(TodoContext);
  const navigate = useNavigate();

  const submit = async (data) => {
    const rta = await sendEmail(data);

    console.log(rta);
    rta && navigate("/login");
  };
  return (
    <section className="resetPassword-container">
      <Logo />
      <h2 className="resetPassword-title">Reset Password</h2>
      {error && <p>Error</p>}
      {authLoading && <Loading />}
      <Form resetPassword submit={submit} value="Send" />
      <Link className="resetPassword-login" to="/login">
        LOGIN
      </Link>
      <BackgroundFigure />
    </section>
  );
};

export default ResetPassword;
