import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContext";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import Message from "../../components/Message/Message";
import "./styles.css";

const Login = () => {
  const { error, setError, authLoading, login } = useContext(TodoContext);

  const onSubmit = async (e) => {
    login({ email: e.email, password: e.password });
  };

  return (
    <section className="login-container">
      <Logo />
      <h2 className="login-title">Login</h2>
      {error && (
        <Message
          error
          title="Error"
          message="The user or password is incorrect"
          btnMessage="Try again"
          onClick={() => setError(false)}
        />
      )}
      {authLoading && <Loading />}
      <Form submit={onSubmit} value="Login" />
      <Link to="/reset-password">forgot password?</Link>
      <Link className="login-singUp" to="/sign-up">
        SIGN UP
      </Link>
      <BackgroundFigure />
    </section>
  );
};

export default Login;
