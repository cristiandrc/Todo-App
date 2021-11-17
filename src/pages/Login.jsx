import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../Context/TodoContext";
import Loading from "../components/Loading/Loading";

import Form from "../components/Form";
const URL = "https://vast-badlands-07993.herokuapp.com/api/v1/auth/login";

const Login = () => {
  const { saveAuth } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    try {
      setError(false);
      setLoading(true);
      const response = await fetch(URL, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: e.email, password: e.password }),
      });
      const rta = await response.json();

      if (rta.token) {
        saveAuth({ isAuth: true, token: rta.token, user: rta.user });
      }
      setLoading(false);
      if (rta.statusCode === 401) setError(true);
      console.log(rta);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <section className="login-container">
      <span>Login</span>
      {error && <p>Usuario o password incorrecta</p>}
      {loading && <Loading />}
      <Form submit={onSubmit} />
      <div>
        <Link to="/reset-password">forgot password?</Link>
        <br />
        <Link to="/sign-up">SIGN UP</Link>
      </div>
    </section>
  );
};

export default Login;
