import React from "react";
import CartIcon from "../Icons/CartIcon";
import WishListIcon from "../Icons/WishListIcon";
import { useAuth, useUserData } from "../../hooks";
import { useNavigate } from "react-router-dom";

const IconBar = () => {
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
    <div className="flex-col-xl-4  text-right">
      <ul>
        <li
          className="inline-block nav-icon"
          onClick={cartHandler}
          style={{ alignSelf: "center" }}
        >
          <CartIcon count={cartList.length} />
        </li>
        <li className="inline-block nav-icon" onClick={wishListHandler}>
          <WishListIcon count={wishList.length} />
        </li>
      </ul>
    </div>
  );
};

export default IconBar;
