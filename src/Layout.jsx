import { Outlet } from "react-router-dom";
import Header from "./components/Header.jsx";
import NavBar from "./components/NavBar.jsx";
import ErrorBanner from "./components/ErrorBanner.jsx";
import ErrorPage from "./components/ErrorPage.jsx";
import LoadingOverlay from "./components/LoadingOverlay.jsx";

function Layout() {
  return (
    <div className="container-fluid">
      <ErrorBanner />
      <LoadingOverlay />
      <ErrorPage />
      <Header />
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
