import { createContext, useState } from "react";
import {
  NotFoundError,
  AuthenticationError,
  ConnectionError,
  ValidationError,
  ServerError,
} from "../api/api";
import { useNavigate } from "react-router";

const AppContext = createContext({
  error: null,
  isLoading: false,
  setIsLoading: () => {},
  setError: () => {},
  clearError: () => {},
  handleError: () => {},
});

function AppProvider({ children }) {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [errorStatus, setErrorStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearError = () => {
    setErrorMessage(null);
    setErrorStatus(null);
  };

  const handleError = (err) => {
    setErrorMessage(err.message);
    setErrorStatus(err.status);
    console.log("123:", err.status, err.message);
    if (err.status === 404 || err.status === 0)
      navigate("/error", {
        state: { status: err.status, message: err.message },
      });
    if (err.status === 403) {
      navigate("/login", {
        state: { status: err.status, message: err.message },
      });
    }
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        errorMessage,
        setErrorMessage,
        errorStatus,
        setErrorStatus,
        clearError,
        handleError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
