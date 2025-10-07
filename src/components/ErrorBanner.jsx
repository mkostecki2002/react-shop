import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "../styles/ErrorBanner.css";

function ErrorBanner() {
  const { errorMessage, errorStatus, clearError } = useContext(AppContext);

  if (errorStatus === 404 || errorStatus === 0 || !errorStatus) return null;

  return (
    <div className="error-banner">
      <p>{errorMessage}</p>
      <button onClick={clearError}>X</button>
    </div>
  );
}

export default ErrorBanner;
