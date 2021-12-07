import { Navbar } from "../../component";
import { useAuth } from "../../hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../constants";
import { Avatar } from "@mui/material";
import style from "./User.module.css";
import { timeAgo } from "../../utils/Date";

export const User = () => {
  const { logOut, userInfo } = useAuth();
  const [userProfile, setUserProfile] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
      return;
    }
    const fetchUserProfile = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      try {
        setLoading(true);
        const { data } = await axios.get(`${apiUrl}/users/profile`, config);
        setUserProfile(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    const unsubscribe = fetchUserProfile();
    return unsubscribe;
  }, [userInfo, navigate]);

  return (
    <>
      <Navbar isLoading={isLoading} />
      {!isLoading && (
        <div className="container m-top-two">
          <div className=" flex-col">
            <div className={style.avatar}>
              <div className="center-vertically">
                <Avatar sx={{ width: 80, height: 80 }} />
                <div className="p-one">
                  <div>hello ,</div>
                  <div>{userProfile.name}</div>
                </div>
              </div>

              <button className={style.logout} onClick={logOut}>
                logout
              </button>
            </div>

            <div className={style.profile}>
              <span style={{ fontSize: "larger", fontWeight: "600" }}>
                Rider Information
              </span>
              <label htmlFor="name">
                <div>Name</div>
                <input
                  type="text"
                  name="name"
                  value={userProfile.name}
                  readOnly
                />
              </label>
              <label htmlFor="email">
                {" "}
                <div>Email</div>
                <input
                  type="email"
                  name="email"
                  value={userProfile.email}
                  readOnly
                />
              </label>
              <label htmlFor="password">
                <div>Password</div>
                <input type="password" name="password" value={""} readOnly />
              </label>
              <label htmlFor="mobile">
                <div>Mobile</div>
                <input type="text" name="mobile" value={""} readOnly />
              </label>
            </div>
            <div className={style.profile}>
              <span style={{ fontSize: "larger", fontWeight: "600" }}>
                Account Information
              </span>
              <div>
                Account type :{" "}
                <span>{userProfile.isAdmin ? "Admin" : "Rider"}</span>
              </div>
              <div>
                Account created : <span>{timeAgo(userProfile.joined)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
