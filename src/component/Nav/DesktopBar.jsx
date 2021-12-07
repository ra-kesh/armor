import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks";

const DesktopBar = () => {
  const { userInfo } = useAuth();

  return (
    <ul className="block">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/products">
        <li>Products</li>
      </Link>
      <Link to={userInfo ? "/user" : "/login"}>
        <li>Account</li>
      </Link>
    </ul>
  );
};

export default DesktopBar;
