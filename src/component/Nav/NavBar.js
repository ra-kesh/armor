import { useUserData, useProduct } from "../../hooks";
// import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

// export default function Loader() {
//   const {
//     state: { loading },
//   } = useData();
//   return (
//     <div className="loader">
//       {/* {console.log(loading)} */}
//       {loading && (
//         <>
//           <div className="loader__start"></div>
//           <div className="loader__end"></div>
//         </>
//       )}
//     </div>
//   );
// }

export const Navbar = () => {
  const { cartList, wishList, dataloading } = useUserData();
  const { loading } = useProduct();

  console.log(loading);

  const Loader = () => {
    return (
      <div className="loader">
        {loading && (
          <>
            <div className="starting-loader"></div>
            <div className="ending-loader"></div>
          </>
        )}
        {dataloading && (
          <>
            <div className="starting-loader"></div>
            <div className="ending-loader"></div>
          </>
        )}
      </div>
    );
  };

  return (
    <header role="banner">
      <div className="site-nav-top">
        <div className="container">
          <div className="flex-row center-vertically ">
            <div className="flex-col-6 flex-col-md-4 order-2 order-md-1 text-left">
              <form action="" className="center-vertically">
                <span>
                  <SearchIcon />
                </span>
                <input
                  type="text"
                  className=" border-zero"
                  placeholder="Search"
                />
              </form>
            </div>
            <div className="flex-col-12 flex-col-md-4 order-1 order-md-2 text-center">
              <span className="logo-text border-right-zero border-left-zero">
                ARMOURS
              </span>
            </div>
            <div className="flex-col-6 flex-col-md-4 order-3 order-md-3 text-right">
              <ul>
                <Link to="/login">
                  <li className="inline-block nav-icon">
                    <PermIdentityIcon />
                  </li>
                </Link>
                <Link to="/wishlist">
                  <li className="inline-block nav-icon">
                    {wishList.length > 0 && <FavoriteIcon />}
                    {wishList.length <= 0 && <FavoriteBorderIcon />}
                  </li>
                </Link>
                <Link to="/cart">
                  <li className="inline-block nav-icon">
                    {cartList.length > 0 && <ShoppingCartIcon />}
                    {cartList.length <= 0 && <ShoppingCartOutlinedIcon />}
                  </li>
                </Link>
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
            <Link to="/blogs">
              <li>Blogs</li>
            </Link>
            {/* <Link to='/Contact'><li>Contact</li></Link> */}
          </ul>
        </div>
      </nav>
      <Loader />
    </header>
  );
};
