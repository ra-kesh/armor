import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useUserData } from "../../../hooks";
import style from "./DesktopBar.module.css";

const DesktopBar = () => {
  const { userInfo } = useAuth();
  const location = useLocation();
  const { cartList, wishList } = useUserData();

  return (
    <ul className="block">
      <Link to="/products">
        <li
          className={
            location.pathname === "/"
              ? style.desktop_bar_item_active
              : style.desktop_bar_item
          }
        >
          Products
        </li>
      </Link>
      <Link to={userInfo ? "/wishlist" : "/login"}>
        <li
          className={
            location.pathname === "/wishlist"
              ? style.desktop_bar_item_active
              : style.desktop_bar_item
          }
        >
          Wishlist ({wishList.length}){" "}
        </li>
      </Link>
      <Link to={userInfo ? "/cart" : "/login"}>
        <li
          className={
            location.pathname === "/cart"
              ? style.desktop_bar_item_active
              : style.desktop_bar_item
          }
        >
          Cart ({cartList.length})
        </li>
      </Link>
      <Link to={userInfo ? "/user" : "/login"}>
        <li
          className={
            location.pathname === "/user"
              ? style.desktop_bar_item_active
              : style.desktop_bar_item
          }
        >
          User
        </li>
      </Link>
    </ul>
  );
};

export default DesktopBar;
