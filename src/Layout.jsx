import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import ErrorBanner from "./components/ErrorBanner.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";
import "./styles/Layout.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./contexts/AppContext.jsx";

function Layout() {
  const navigate = useNavigate();
  const { errorStatus } = useContext(AppContext);
  useEffect(() => {
    if (!errorStatus) return;

    if (errorStatus === 401 || errorStatus === 403) {
      navigate("/login");
    } else if (errorStatus === 404 || errorStatus === 0) {
      navigate("/error");
    }
  }, [errorStatus, navigate]);
  return (
    <div className="container">
      <ErrorBanner />
      <LoadingOverlay />
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
