import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import Message from "../../components/Message/Message";
import { TodoContext } from "../../Context/TodoContext";
import "./resetPassword.css";

const ResetPassword = () => {
  const { sendEmail, error, setError, authLoading } = useContext(TodoContext);
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const submit = async (data) => {
    const rta = await sendEmail(data);

    rta && setSuccessful(true);
  };
  return (
    <section className="resetPassword-container">
      <Logo />
      <h2 className="resetPassword-title">Reset Password</h2>
      {error && (
        <Message
          error
          title="Error"
          message="Sorry, we have an issue"
          btnMessage="Try again"
          onClick={() => setError(false)}
        />
      )}
      {authLoading && <Loading />}

      {successful && (
        <Message
          title="Great"
          message="Email sent successfully"
          btnMessage="Go to Login"
          onClick={() => navigate("/login")}
        />
      )}

      <Form resetPassword submit={submit} value="Send" />
      <Link className="resetPassword-login" to="/login">
        LOGIN
      </Link>
      <BackgroundFigure />
    </section>
  );
};

export default ResetPassword;
