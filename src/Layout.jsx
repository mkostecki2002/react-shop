import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";
import { useContext } from "react";
import { AppContext } from "./contexts/AppContext.jsx";

function Layout() {
  const { errorStatus } = useContext(AppContext);
  const { isLoading } = useContext(AppContext);

  return errorStatus === 0 || errorStatus === 404 ? (
    <ErrorPage />
  ) : (
    <div className="container-fluid">
      {isLoading && <LoadingOverlay />}
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
