import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FormLoginRegister from "../components/FormLoginRegister";

function FormLoginRegisterOverlay() {
  const { isLogged } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(!isLogged());

  const toggleForm = (e) => {
    e.preventDefault();
    setIsLogin(!isLogin);
  };

  return (
    <FormLoginRegister
      toggleForm={toggleForm}
      isLogged={isLogged}
      isLogin={isLogin}
      setIsLogin={setIsLogin}
    />
  );
}
export default FormLoginRegisterOverlay;
