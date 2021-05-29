import { Navbar } from "../component";
import { useAuth } from "../hooks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const User = () => {
  const { logOut, userInfo } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
  }, [userInfo, navigate]);

  return (
    <>
      <Navbar />
      <div className="container m-top-two">
        <div className="flex-row">
          <div className="flex-col-12 flex justify-end ">
            <button onClick={() => logOut()}>logout</button>
          </div>
          <div className="flex-col-lg-4">
            <h4>User Details</h4>
            <div className="container ">
              <h5>name : {userInfo.name}</h5>
              <h5>email : {userInfo.email}</h5>
            </div>
          </div>
          <div className="flex-col-lg-8 flex space-between">
            <h4>User Activity</h4>
          </div>
        </div>
      </div>
    </>
  );
};
