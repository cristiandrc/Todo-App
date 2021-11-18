import React from "react";
import "./form.css";
import useField from "../../Hooks/useField";

const Form = ({ singUp, submit, isChangePassword, resetPassword, value }) => {
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
      {singUp && <input {...name} className="log-input" placeholder="Name" />}
      {!isChangePassword && (
        <input {...email} className="log-input" placeholder="Email" />
      )}
      {!resetPassword && (
        <input {...password} className="log-input" placeholder="Password" />
      )}
      {isChangePassword && (
        <input
          {...newPassword}
          className="log-input"
          placeholder="NewPassword"
        />
      )}
      <input type="submit" className="log-submit" value={value} />
    </form>
  );
};

export default Form;
