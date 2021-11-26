import { useContext } from "react";
import { TodoContext } from "../../Context/TodoContext";
import Form from "../../components/Form/Form";
import BackgroundFigure from "../../components/BackgroundFigure/BackgroundFigure";
import "./changePassword.css";
import Loading from "../../components/Loading/Loading";
import Logo from "../../components/Logo/Logo";

const ChangePassword = () => {
  const { error, authLoading, changePassword } = useContext(TodoContext);
  return (
    <section className="changePassword-container">
      <Logo />
      <h2 className="changePassword-title">Change password</h2>
      {error && <p>Error</p>}
      {authLoading && <Loading />}
      <Form isChangePassword submit={changePassword} />
      <BackgroundFigure />
    </section>
  );
};

export default ChangePassword;
