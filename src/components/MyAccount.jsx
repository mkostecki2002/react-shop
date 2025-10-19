import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router";

function MyAccount() {
  const { isLogged } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="nav-item">
      <Link to={isLogged() ? "/me" : "/login"}>
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img src="/person-fill.svg" />
          <p>my account</p>
          <p>{isHovered ? "hover" : "not hover"}</p>
        </div>
      </Link>
    </div>
  );
}

export default MyAccount;
