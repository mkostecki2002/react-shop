import MyAccount from "./MyAccount";
import Menu from "./Menu";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="container-fluid">
        {/* Sekcja mobilna (widoczna tylko poniżej md) */}
        <div className="d-md-none w-100">
          <div className="nav justify-content-around align-items-center">
            <Menu />
            <MyAccount />
            <div className="nav-item text-center">
              <img
                src="/shopping-carts.png"
                alt="Koszyk"
                style={{ width: "24px", height: "24px" }}
              />
              <p className="mb-0">Koszyk</p>
            </div>
          </div>
        </div>

        {/* Sekcja desktopowa (collapse) */}
        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav justify-content-around w-75">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Placeholder 1
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Placeholder 2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Placeholder 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
