import { useState } from "react";
import { Link } from "react-router";

function UserInfoSidebar({ sectionName }) {
  const [section, setSection] = useState(sectionName ? sectionName : "info");
  const linkInfo = (
    <Link
      to={"/me/info"}
      className={`nav-link ${section === "info" && "active"}`}
      onClick={() => {
        setSection("info");
      }}
    >
      Informations
    </Link>
  );
  const linkOrders = (
    <Link
      to={"/me/orders"}
      className={`nav-link ${section === "orders" && "active"}`}
      onClick={() => {
        setSection("orders");
      }}
    >
      Orders
    </Link>
  );
  const linkSettings = (
    <Link
      to={"/me/settings"}
      className={`nav-link ${section === "settings" && "active"}`}
      onClick={() => {
        setSection("settings");
      }}
    >
      Settings
    </Link>
  );
  return (
    <>
      <div className="col-md-3">
        {/* Sidebar for md and larger */}
        <ul className="nav nav-pills flex-column d-none d-md-block">
          <li className="nav-item">{linkInfo}</li>
          <li className="nav-item">{linkOrders}</li>
          <li className="nav-item">{linkSettings}</li>
          <li className="nav-item">
            <a className="nav-link">Logout</a>
          </li>
        </ul>

        {/* Navbar for mobile */}
        <ul class="nav nav-pills justify-content-center d-md-none">
          <li className="nav-item">{linkInfo}</li>
          <li className="nav-item">{linkOrders}</li>
          <li className="nav-item">{linkSettings}</li>
          <li class="nav-item">
            <a class="nav-link">Logout</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default UserInfoSidebar;
