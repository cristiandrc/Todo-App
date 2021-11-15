import React from "react";
import "./styles/form.css";
import useField from "../Hooks/useField";

const Form = ({ isLogUp, submit, isChangePassword }) => {
  const name = useField({ type: "name" });
  const email = useField({ type: "email" });
  const password = useField({ type: "password" });
  const newPassword = useField({ type: "password" });

  const onSubmit = (e) => {
    e.preventDefault();
    submit({
      name: name.value,
      email: email.value,
      password: password.value,
      newPassword: newPassword.value,
    });
  };
  return (
    <form onSubmit={onSubmit} className="log-form">
      {isLogUp && <input {...name} className="log-input" placeholder="Name" />}
      {!isChangePassword && (
        <input {...email} className="log-input" placeholder="Email" />
      )}
      <input {...password} className="log-input" placeholder="Password" />
      {isChangePassword && (
        <input
          {...newPassword}
          className="log-input"
          placeholder="NewPassword"
        />
      )}
      <input type="submit" className="log-submit" />
    </form>
  );
};

export default Form;
