import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserInfoPage() {
  const { isLogged } = useContext(UserContext);
  return isLogged() && <div></div>;
}

export default UserInfoPage;
