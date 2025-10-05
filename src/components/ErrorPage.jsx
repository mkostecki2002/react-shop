import { useLocation } from "react-router";
import { AppContext } from "../contexts/AppContext";

function ErrorPage() {
  const location = useLocation();
  const { status, message } = location.state || {};

  return (
    <div className="error-page">
      <h1>{`Błąd ${status}`}</h1>
      <p>{message}</p>
    </div>
  );
}

export default ErrorPage;
