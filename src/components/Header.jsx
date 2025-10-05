import { useContext } from "react";
import MyAccount from "./MyAccount";
import { ScreenContext } from "../contexts/ScreenContext";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const { isMobile } = useContext(ScreenContext);

  return (
    <header>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src="/logov2.png" alt="logo" className="img-logo" />
          </Link>
        </div>

        {/* Search component JSX */}
        <div className="search">
          <input type="text" placeholder="Search for products" />
          <button>Search</button>
        </div>

        {!isMobile && (
          <>
            <MyAccount />
            <Link to={"/cart"}>
              <div className="cart">
                <p>Cart</p>
              </div>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
