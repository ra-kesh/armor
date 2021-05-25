import { useCart, useWishList, useUserData } from "../../hooks";
// import {useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

export const Navbar = () => {
  const { cartList } = useUserData();

  // const [cartQuantity,setCartQuantity] = useState(0)
  // const [wishListQuantity,setWishListQuantity] = useState(0)

  const { itemsInCart } = useCart();
  const { itemsInWishList } = useWishList();

  //   useEffect(()=>{
  //     if(itemsInCart.length >0){
  //         const totalQuantity = itemsInCart.reduce((total,item)=>{
  //             return total+item.quantity;
  //         },0)
  //         setCartQuantity(totalQuantity)
  //     }else{
  //         setCartQuantity(0)
  //     }
  // },[itemsInCart])

  //   useEffect(()=>{
  //     if(itemsInWishList.length >0){
  //         const totalQuantity = itemsInWishList.reduce((total,item)=>{
  //             return total+item.quantity;
  //         },0)
  //         setWishListQuantity(totalQuantity)
  //     }else{
  //         setWishListQuantity(0)
  //     }
  // },[itemsInWishList])

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
                    {itemsInWishList.length > 0 && <FavoriteIcon />}
                    {itemsInWishList.length <= 0 && <FavoriteBorderIcon />}
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
    </header>
  );
};
