import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";
import { TodoContext } from "../../Context/TodoContext";
import Message from "../../components/Message/Message";
import "./recovery.css";

const Recovery = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [successful, setSuccessful] = useState(false);

  const { error, setError, authLoading, recoveryPassword } =
    useContext(TodoContext);

  const onClick = async ({ password }) => {
    const rta = await recoveryPassword({ password, token });
    if (rta?.modifiedCount) setSuccessful(true);
  };
  return (
    <section className="recovery-container">
      <Logo />
      <h2 className="recovery-title">Recovery</h2>
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

      {successful && (
        <Message
          title="Great"
          message="The password was changed successfully"
          btnMessage="Go to Login"
          onClick={() => navigate("/login")}
        />
      )}
      <Form submit={onClick} value="Recovery" />
      <BackgroundFigure />
    </section>
  );
};

export default Recovery;
