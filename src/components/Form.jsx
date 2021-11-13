import React, { useState } from "react";
import "./styles/form.css";
import useField from "../Hooks/useField";

const Form = ({ isLogUp, submit }) => {
  const name = useField({ type: "name" });
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });

  const onSubmit = (e) => {
    e.preventDefault();
    submit({ name: name.value, email: email.value, password: password.value });
  };
  return (
    <form onSubmit={onSubmit} className="log-form">
      {isLogUp && <input {...name} className="log-input" placeholder="Name" />}
      <input {...email} className="log-input" placeholder="Email" />
      <input {...password} className="log-input" placeholder="Password" />
      <input type="submit" className="log-submit" />
    </form>
  );
};

export default Form;
