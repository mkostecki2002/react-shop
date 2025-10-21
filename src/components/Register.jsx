import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { AppContext } from "../contexts/AppContext";

function Register({ setIsLoginForm, setInfo }) {
  const { register } = useContext(UserContext);
  const { handleError, setIsLoading } = useContext(AppContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangeFirstName = e => {
    setFirstName(e.target.value);
  };
  const handleChangeLastName = e => {
    setLastName(e.target.value);
  };
  const handleChangeEmail = e => {
    setEmail(e.target.value);
  };
  const handleChangePassword = e => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = e => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    register({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })
      .then(() => {
        setIsLoginForm(true);
        setInfo("Rejestracja przebiegła pomyślnie!");
      })
      .catch(err => {
        handleError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <form
      className="form d-flex justify-content-center align-items-center row"
      onSubmit={handleSubmit}
    >
      <div className="row mb-3 p-0">
        <div className="col-12 col-md-6 ps-0 pe-1">
          <label className="form-label" htmlFor="firstName">
            First Name:
          </label>
          <input
            type="text"
            placeholder="first name"
            id="firstName"
            className="form-control"
            onChange={handleChangeFirstName}
          />
        </div>
        <div className="col-12 col-md-6 pe-0 ps-1">
          <label className="form-label" htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            placeholder="last name"
            id="lastName"
            className="form-control"
            onChange={handleChangeLastName}
          />
        </div>
      </div>

      <input
        type="email"
        placeholder="email"
        id="email"
        className="form-control mb-3"
        onChange={handleChangeEmail}
      />
      <input
        type="password"
        placeholder="password"
        id="password"
        className="form-control mb-3"
        onChange={handleChangePassword}
      />
      <input
        type="password"
        placeholder="confirm password"
        id="confirmPassword"
        className="form-control mb-3"
        onChange={handleChangeConfirmPassword}
      />
      <button className="btn btn-primary w-50 mx-auto" type="submit">
        Register
      </button>
    </form>
  );
}
export default Register;
