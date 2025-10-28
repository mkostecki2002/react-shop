import { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, useParams } from "react-router";
import UserInfoSidebar from "../components/UserInfoSidebar";
import UserInfo from "../components/UserInfo";

function UserInfoPage() {
  const navigate = useNavigate();
  const { isLogged } = useContext(UserContext);
  const { section } = useParams();

  useEffect(() => {
    if (!isLogged()) {
      navigate("/login");
    }
  }, [isLogged, navigate]);

  let content;
  switch (section) {
    case "info":
      content = <UserInfo />;
      break;
    case "orders":
      //Need to change component
      content = <UserInfo />;
      break;
    case "settings":
      //Need to change component
      content = <UserInfo />;
      break;
    default:
      content = <UserInfo />;
  }

  return (
    isLogged() && (
      <div className="row">
        <UserInfoSidebar sectionName={section} />
        {content}
      </div>
    )
  );
}

export default UserInfoPage;
