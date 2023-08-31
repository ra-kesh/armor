import { useAuth, useUserData } from "../../hooks";
import { Avatar } from "@mui/material";
import style from "./User.module.css";
import { timeAgo } from "../../utils/Date";
import withLayout from "../../utils/withLayout";

const User = () => {
  const { logOut } = useAuth();
  const { userProfile, dataloading } = useUserData();

  return (
    <>
      {!dataloading ? (
        <div className="container">
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
      ) : (
        <div className="center-vertically min-h-100">
          <h4>Loading...</h4>
        </div>
      )}
    </>
  );
};

export default withLayout(User);
