import { createContext, useState } from "react";
import { loginUser, registerUser } from "../api/api";

const UserContext = createContext({
  token: null,
  setToken: () => {},
  clearToken: () => {},
  login: () => {},
  logout: () => {},
  register: () => {},
});

function UserProvider({ children }) {
  const [token, setToken] = useState(null);
  const clearToken = () => setToken(null);

  // LOGIN
  const login = async ({ email, password }) => {
    const loginRequest = { email, password };
    const response = await loginUser(loginRequest);
    if (response?.token) {
      setToken(response.token);
      // sessionStorage.setItem("token", response.token);
    }
    return response;
  };

  // LOGOUT
  const logout = () => {
    clearToken();
    // sessionStorage.removeItem("token");
  };

  // REGISTER
  const register = async ({
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    phone,
  }) => {
    //Validation data
    console.log("jestem w konteskcie");
    const registerRequest = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      phone,
    };
    return await registerUser(registerRequest);
  };

  const isLogged = () => {
    return token != null;
  };

  return (
    <UserContext.Provider
      value={{ token, setToken, clearToken, login, logout, register, isLogged }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
