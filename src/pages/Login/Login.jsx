import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContext";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import Form from "../../components/Form/Form";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./styles.css";

const Login = () => {
  const { error, authLoading, login } = useContext(TodoContext);

  const onSubmit = async (e) => {
    login({ email: e.email, password: e.password });
  };

  return (
    <section className="login-container">
      <Logo />
      <h2 className="login-title">Login</h2>
      {error && <p>Usuario o password incorrecta</p>}
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
