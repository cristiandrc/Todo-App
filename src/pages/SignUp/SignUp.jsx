import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./signUp.css";
import Logo from "../../components/Logo/Logo";
import Message from "../../components/Message/Message";

const SignUp = () => {
  const { error, setError, authLoading, createAccount } =
    useContext(TodoContext);
  const [successful, setSuccessful] = useState(false);
  const navigate = useNavigate();

  const submit = async (data) => {
    const rta = await createAccount(data);
    if (rta?.name) setSuccessful(true);
    // navigate("/login");
  };

  return (
    <section className="singUp-container">
      <Logo />
      <h2 className="singUp-title">Sign Up</h2>
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
          message="Account Created successfully"
          btnMessage="Go to Login"
          onClick={() => navigate("/login")}
        />
      )}
      <Form singUp submit={submit} value="Sign Up" />
      <Link className="singUp-login" to="/login">
        LOGIN
      </Link>
      <BackgroundFigure />
    </section>
  );
};

export default SignUp;
