import { useContext, useState } from "react";
import "../styles/MyAccount.css";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router";

function MyAccount() {
  const { isLogged } = useContext(UserContext);
  const [isHovered, setIsHovered] = useState(false);

  
  return (
    <Link to={isLogged() ? "/me" : "/login"}>
      <div
        className="account"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="/user.png" />
        <p>my account</p>
        <p>{isHovered ? "hover" : "not hover"}</p>
      </div>
    </Link>
  );
}

export default MyAccount;
