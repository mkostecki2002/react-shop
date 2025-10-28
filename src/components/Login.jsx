import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router";
import { AppContext } from "../contexts/AppContext";

function Login() {
  const { login } = useContext(UserContext);
  const { handleError, setErrorMessage, setErrorStatus, setIsLoading } =
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
      setIsLoading(true);
      login({ email: email, password: password })
        .then(() => {
          navigate("/");
        })
        .catch(err => {
          handleError(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <form
      className="d-flex flex-column justify-content-center"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email" className="form-label">
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
        <label htmlFor="password" className="form-label">
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
      <button className="btn btn-primary w-50 mx-auto" type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
