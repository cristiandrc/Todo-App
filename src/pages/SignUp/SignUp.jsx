import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./signUp.css";
import Logo from "../../components/Logo/Logo";

const SignUp = () => {
  const { error, authLoading, createAccount } = useContext(TodoContext);
  const navigate = useNavigate();

  const submit = async (data) => {
    const rta = await createAccount(data);
    if (rta?.name) navigate("/login");
  };

  return (
    <section className="singUp-container">
      <Logo />
      <h2 className="singUp-title">Sign Up</h2>
      {error && <span>error</span>}
      {authLoading && <Loading />}
      <Form singUp submit={submit} value="Sign Up" />
      <Link className="singUp-login" to="/login">
        LOGIN
      </Link>
      <BackgroundFigure />
    </section>
  );
};

export default SignUp;
