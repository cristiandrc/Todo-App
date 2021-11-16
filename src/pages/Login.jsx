import { useContext } from "react";
import { Link } from "react-router-dom";
import { TodoContext } from "../Context/TodoContext";

import Form from "../components/Form";
const URL = "https://vast-badlands-07993.herokuapp.com/api/v1/auth/login";

const Login = () => {
  const { saveAuth } = useContext(TodoContext);

  const onSubmit = async (e) => {
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
    console.log(rta);
  };

  return (
    <section className="login-container">
      <span>Login</span>
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
