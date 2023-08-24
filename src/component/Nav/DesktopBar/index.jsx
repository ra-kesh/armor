import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useUserData } from "../../../hooks";
import style from "./DesktopBar.module.css";

const DesktopBar = () => {
  const { userInfo } = useAuth();
  const { cartList, wishList } = useUserData();

  return (
    <ul className="block">
      <Link to="/">
        <li className={style.desktop_bar_item}>Shop</li>
      </Link>
      <Link to={userInfo ? "/user" : "/login"}>
        <li className={style.desktop_bar_item}>Account</li>
      </Link>
      <Link to={userInfo ? "/wishlist" : "/login"}>
        <li className={style.desktop_bar_item}>
          Wishlist ({wishList.length}){" "}
        </li>
      </Link>
      <Link to={userInfo ? "/cart" : "/login"}>
        <li className={style.desktop_bar_item}>Cart ({cartList.length})</li>
      </Link>
    </ul>
  );
};

export default DesktopBar;
