import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks";
import style from "./DesktopBar.module.css";

const DesktopBar = () => {
  const { userInfo } = useAuth();

  return (
    <ul className="block">
      <Link to="/">
        <li className={style.desktop_bar_item}>Home</li>
      </Link>
      <Link to="/products">
        <li className={style.desktop_bar_item}>Products</li>
      </Link>
      <Link to={userInfo ? "/user" : "/login"}>
        <li className={style.desktop_bar_item}>Account</li>
      </Link>
    </ul>
  );
};

export default DesktopBar;
