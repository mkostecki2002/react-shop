import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";
import { AppContext } from "../contexts/AppContext";

function Login() {
  const { login } = useContext(UserContext);
  const { handleError, setErrorMessage, setErrorStatus } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };

  const handleChangePassword = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Invalid email or password!");
      setErrorStatus(400);
    } else {
      login({ email: email, password: password })
        .then(() => {
          navigate("/");
        })
        .catch(err => {
          handleError(err);
        });
    }
  };

  return (
    <form
      className="d-flex flex-column justify-content-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label for="email" className="form-label">
          Email:
        </label>
      </div>
      <input
        type="email"
        placeholder="email"
        id="email"
        className="mb-3"
        onChange={handleChangeEmail}
      />
      <div>
        <label for="password" className="form-label">
          Password:
        </label>
      </div>
      <input
        type="password"
        placeholder="password"
        id="password"
        className="mb-3"
        onChange={handleChangePassword}
      />
      <button className="button w-50 m-auto" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
