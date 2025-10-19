import { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/Login";
import Register from "../components/Register";

function FormLoginRegister() {
  const { isLogged } = useContext(UserContext);
  const [info, setInfo] = useState(null);
  const [isLoginForm, setIsLoginForm] = useState(!isLogged());

  const toggleForm = e => {
    if (e && e.preventDefault) e.preventDefault();
    if (isLogged()) return;
    setIsLoginForm(!isLoginForm);
  };

  return (
    <div className="container-fluid bg-light py-4">
      <ul className="nav nav-tabs justify-content-center mb-4">
        <li className="nav-item px-3">
          <span
            className={`nav-link ${isLoginForm && "active"} ${
              isLogged() && "disabled"
            }`}
            onClick={toggleForm}
          >
            LOGIN
          </span>
        </li>
        <li className="nav-item px-3">
          <span
            className={`nav-link ${!isLoginForm && "active"}`}
            onClick={toggleForm}
          >
            REGISTER
          </span>
        </li>
      </ul>

      <div className="row g-0 justify-content-center">
        <div className="col-12 d-md-none text-center mb-3 px-3">
          <h4 className="mb-2">Witaj w sklepie</h4>
          <p className="mb-0 small">
            Zaloguj się lub zarejestruj, aby kontynuować.
          </p>
        </div>

        <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center bg-primary text-white p-4">
          <div className="text-center">
            <h4 className="mb-2">Witaj w sklepie</h4>
            <p className="mb-0 small">
              Zaloguj się lub zarejestruj, aby kontynuować.
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 p-4">
          {info && <div className="form-result-information">{info}</div>}

          {isLoginForm && !isLogged() && <Login />}
          {!isLoginForm && (
            <Register setIsLoginForm={setIsLoginForm} setInfo={setInfo} />
          )}
        </div>
      </div>
    </div>
  );
}

export default FormLoginRegister;
