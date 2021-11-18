import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Form from "../../components/Form/Form";
import Loading from "../../components/Loading/Loading";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./signUp.css";

const SignUp = () => {
  const { error, createAccount } = useContext(TodoContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (data) => {
    setLoading(true);
    const rta = await createAccount(data);
    if (rta.name) navigate("/login");
    setLoading(false);
  };

  return (
    <section className="singUp-container">
      <h2 className="singUp-tittle">Sign Up</h2>
      {error && <span>error</span>}
      {loading && <Loading />}
      <Form singUp submit={submit} value="Sign Up" />
      <Link className="singUp-login" to="/login">
        LOGIN
      </Link>
      <BackgroundFigure />
    </section>
  );
};

export default SignUp;
