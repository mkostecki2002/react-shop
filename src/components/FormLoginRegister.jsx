import "../styles/FormLoginRegister.css";
import Register from "./Register";
import Login from "./Login";
import { useState } from "react";

function FormLoginRegister({ toggleForm, isLogged, isLogin, setIsLogin }) {
  const [info, setInfo] = useState(null);
  return (
    <div className="login-and-register-container">
      {info && <div className="form-result-information">{info}</div>}
      {!isLogged() && (
        <button
          className={`login-toggle-button${isLogin && "-inactive"}`}
          onClick={toggleForm}
        >
          LOGIN
        </button>
      )}

      <button
        className={`register-toggle-button${!isLogin && "-inactive"}`}
        onClick={toggleForm}
      >
        REGISTER
      </button>
      {isLogin && !isLogged() && <Login />}
      {!isLogin && <Register setIsLogin={setIsLogin} setInfo={setInfo} />}
    </div>
  );
}

export default FormLoginRegister;
