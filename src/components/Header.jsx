import { useContext } from "react";
import MyAccount from "./MyAccount";
import { ScreenContext } from "../contexts/ScreenContext";
import { Link } from "react-router-dom";

function Header() {
  const { isMobile } = useContext(ScreenContext);

  return (
    <header>
      <div className="d-flex flex-wrap align-items-center justify-content-around my-5">
        <div>
          <Link to="/">
            <img src="/logov1.png" alt="logo" className="rounded" />
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
                <i class="bi bi-cart"></i>
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
