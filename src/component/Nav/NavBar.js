import { useUserData, useAuth } from "../../hooks";
import { Link, useNavigate } from "react-router-dom";
import { Loader } from "./Loader";
import CartIcon from "../Icons/CartIcon";
import WishListIcon from "../Icons/WishListIcon";
import { SocialBar } from "./SocialBar";

export const Navbar = () => {
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
    <header role="banner">
      <div className="site-nav-top">
        <div className="container">
          <div className="flex-row center-vertically ">
            <div className="flex-col-6 flex-col-md-4 order-2 order-md-1 text-left">
              <SocialBar />
            </div>
            <div className="flex-col-12 flex-col-md-4 order-1 order-md-2 text-center">
              <span className="logo-text ">M . A . D</span>
            </div>
            <div className="flex-col-6 flex-col-md-4 order-3 order-md-3 text-right">
              <ul>
                <li className="inline-block nav-icon" onClick={cartHandler}>
                  <CartIcon count={cartList.length} />
                </li>
                <li className="inline-block nav-icon" onClick={wishListHandler}>
                  <WishListIcon count={wishList.length} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar text-center" role="navigation">
        <div className="container">
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
        </div>
      </nav>
      <Loader />
    </header>
  );
};
