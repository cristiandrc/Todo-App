import React, { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Form from "../../components/Form/Form";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./changePassword.css";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import Message from "../../components/Message/Message";

const ChangePassword = () => {
  const { error, setError, authLoading, changePassword } =
    useContext(TodoContext);
  return (
    <section className="changePassword-container">
      <Logo />
      <h2 className="changePassword-title">Change password</h2>
      {error && (
        <Message
          error
          title="Error"
          message="Sorry, we have an issue"
          btnMessage="Try again"
          onClick={() => setError(false)}
        />
      )}
      {authLoading && <Loading />}
      <Form isChangePassword submit={changePassword} />
      <BackgroundFigure />
    </section>
  );
};

export default ChangePassword;
