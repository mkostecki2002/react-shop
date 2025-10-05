import { useContext, useState } from "react";
import "../styles/FormLoginRegister.css";
import { UserContext } from "../contexts/UserContext";
import { AppContext } from "../contexts/AppContext";

function Register({ setIsLogin, setInfo }) {
  const { register } = useContext(UserContext);
  const { handleError } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
      .then(() => {
        setIsLogin(true);
        setInfo("Rejestracja przebiegła pomyślnie!");
      })
      .catch((err) => {
        handleError(err);
      });
  };

  return (
    <form className="register-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="first name"
        id="firstName"
        onChange={handleChangeFirstName}
      />
      <input
        type="text"
        placeholder="last name"
        id="lastName"
        onChange={handleChangeLastName}
      />
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
      <input
        type="password"
        placeholder="confirm password"
        id="confirmPassword"
        onChange={handleChangeConfirmPassword}
      />
      <button type="submit">Register</button>
    </form>
  );
}
export default Register;
