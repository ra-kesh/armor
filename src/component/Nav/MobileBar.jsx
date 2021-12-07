import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CartIcon from "../Icons/CartIcon";
import WishListIcon from "../Icons/WishListIcon";
import { useAuth, useUserData } from "../../hooks";
import { useNavigate } from "react-router-dom";

export const MobileBar = ({ setShow, show }) => {
  const { cartList, wishList } = useUserData();
  const { userInfo } = useAuth();
  const navigate = useNavigate();

  const wishListHandler = () => {
    if (userInfo) {
      navigate("/wishlist");
    } else {
      navigate("/login");
    }
  };
  const cartHandler = () => {
    if (userInfo) {
      navigate("/cart");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="flex-row space-between center-vertically">
      <div
        className="center-vertically"
        onClick={() => setShow((show) => !show)}
      >
        <MenuIcon />
      </div>
      <div className="center-vertically">
        <div className="nav-icon" onClick={cartHandler}>
          <CartIcon count={cartList.length} />
        </div>
        <div className="nav-icon" onClick={wishListHandler}>
          <WishListIcon count={wishList.length} />
        </div>
      </div>
    </div>
  );
};
