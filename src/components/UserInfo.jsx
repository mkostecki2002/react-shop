import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchAPI } from "../api/api";
import { AppContext } from "../contexts/AppContext";

function UserInfo() {
  const { handleError } = useContext(AppContext);
  const { token } = useContext(UserContext);
  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    fetchAPI("customer", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(data => {
        console.log(data);
        setUserInfo(data);
      })
      .catch(err => {
        handleError(err);
      });
  }, [token, handleError]);

  if (!userInfo) return <div>Ładowanie</div>;

  return (
    <div className="col-md-9">
      <h1>{userInfo.firstName}</h1>
    </div>
  );
}

export default UserInfo;
