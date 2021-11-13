import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";

const URL = "https://vast-badlands-07993.herokuapp.com/api/v1/auth/login";
const Login = () => {
  const navigate = useNavigate();

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
      navigate("/");
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
