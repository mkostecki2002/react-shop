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

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setErrorMessage("Invalid email or password!");
      setErrorStatus(400);
    } else {
      login({ email: email, password: password })
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          handleError(err);
        });
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="email"
        id="email"
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        onChange={handleChangePassword}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
