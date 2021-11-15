import React, { useContext } from "react";
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
    </section>
  );
};

export default Login;
