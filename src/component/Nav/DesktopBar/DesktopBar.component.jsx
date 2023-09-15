import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth, useUserData } from "../../../hooks";
import style from "./DesktopBar.module.css";

const DesktopBar = () => {
  const { userInfo } = useAuth();
  const location = useLocation();
  const { cartList, wishList } = useUserData();

  const navLinksData = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    {
      path: userInfo ? "/wishlist" : "/login",
      label: `Wishlist (${wishList.length})`,
    },
    { path: userInfo ? "/cart" : "/login", label: `Cart (${cartList.length})` },
    { path: userInfo ? "/user" : "/login", label: "User" },
  ];

  const navLinks = navLinksData.map((link) => {
    return (
      <Link to={link.path} key={link.path}>
        <li
          className={
            location.pathname === link.path
              ? style.desktop_bar_item_active
              : style.desktop_bar_item
          }
        >
          {link.label}
        </li>
      </Link>
    );
  });

  return <ul className="block">{navLinks}</ul>;
};

export default DesktopBar;
