import { useContext } from "react";
import { ScreenContext } from "../contexts/ScreenContext";
import MyAccount from "./MyAccount";
import Menu from "./Menu";
import "../styles/NavBar.css";

function NavBar() {
  const { isMobile } = useContext(ScreenContext);
  return (
    <nav>
      {isMobile ? (
        <div className="navbar-mobile">
          {isMobile && <Menu />}
          <MyAccount />
          <div className="navbar-item">
            <img src="/shopping-cart.png" />
            <p>koszyk</p>
          </div>
        </div>
      ) : (
        <div className="navbar">
          <ul className="nav-links">
            <li>kategoria1</li>
            <li>kategoria2</li>
            <li>kategoria3</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
