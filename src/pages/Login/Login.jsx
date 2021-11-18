import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../../Context/TodoContext";
import Loading from "../../components/Loading/Loading";
import Form from "../../components/Form/Form";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./styles.css";

const Login = () => {
  const { error, login } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    setLoading(true);
    const rta = await login({ email: e.email, password: e.password });
    setLoading(false);
  };

  return (
    <section className="login-container">
      <h2 className="login-title">Login</h2>
      {error && <p>Usuario o password incorrecta</p>}
      {loading && <Loading />}
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
