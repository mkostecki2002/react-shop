import { AppContext } from "../contexts/AppContext";
import { useContext } from "react";

function ErrorPage() {
  const { errorMessage, errorStatus } = useContext(AppContext);
  return (
    <div className="d-flex container-fluid text-center flex-column align-items-center justify-content-center min-vh-100">
      <h1>{errorStatus === 0 ? null : errorStatus}</h1>
      <p>{errorMessage}</p>
    </div>
  );
}

export default ErrorPage;
