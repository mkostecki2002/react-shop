import { AppContext } from "../contexts/AppContext";
import "../styles/ErrorPage.css";
import { useContext } from "react";

function ErrorPage() {
  const { errorMessage, errorStatus } = useContext(AppContext);
  return (
    (errorStatus === 0 || errorStatus === 404) && (
      <div className="error-page">
        <h1>{errorStatus}</h1>
        <p>{errorMessage}</p>
      </div>
    )
  );
}

export default ErrorPage;
