import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  Cart,
  Login,
  Products,
  Wishlist,
  ProductDetail,
  User,
  Home,
  Blog,
  Signup,
} from "./view";
import { useAuth, useProduct, useUserData } from "./hooks";
import { useEffect } from "react";
import axios from "axios";
import { apiUrl } from "./constants";
import { PrivateRoute } from "./utils/PrivateRoute";

function App() {
  const { userDispatch } = useUserData();
  const { productDispatch } = useProduct();
  const { userInfo } = useAuth();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    if (userInfo) {
      (async () => {
        try {
          userDispatch({ type: "SHOW LOADING" });
          const {
            data: { data: user },
          } = await axios.get(`${apiUrl}/userdata/${userInfo._id}`, {
            cancelToken,
          });
          userDispatch({
            type: "GET WISHLIST ITEMS",
            payload: user.wishList,
          });
          userDispatch({ type: "GET CART ITEMS", payload: user.cartList });
          userDispatch({ type: "HIDE LOADING" });
        } catch (error) {
          console.log(error);
        }
      })();
    }

    return () => {
      source.cancel();
    };
  }, [userDispatch, userInfo]);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    (async () => {
      try {
        productDispatch({ type: "SHOW LOADING" });
        const {
          data: { data: products },
        } = await axios.get(`${apiUrl}/products`, {
          cancelToken,
        });
        productDispatch({ type: "GET PRODUCT LIST", payload: products });
        productDispatch({ type: "HIDE LOADING" });
      } catch (err) {
        console.log({ error: err.message });
      }
    })();
    return () => {
      source.cancel();
    };
  }, [productDispatch]);

  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <PrivateRoute path="/cart" element={<Cart />} />
        <PrivateRoute path="/wishlist" element={<Wishlist />} />
        <PrivateRoute path="/user" element={<User />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
