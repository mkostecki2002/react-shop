import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import "../styles/ErrorBanner.css";

function ErrorBanner() {
  const { errorMessage, clearError } = useContext(AppContext);

  if (!errorMessage) return null;

  return (
    <div className="error-banner">
      <p>{errorMessage}</p>
      <button onClick={clearError}>X</button>
    </div>
  );
}

export default ErrorBanner;
