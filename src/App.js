import "./App.css";
import { Cart, Login, Products, Wishlist, ProductDetail } from "./view";
import { Navbar } from "./component";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAuth } from "./hooks";

function App() {
  // const [userProfile, setUserProfile] = useState({});

  // const { userInfo } = useAuth();

  // useEffect(() => {
  //   if (userInfo) {
  //     setUserProfile(userInfo);
  //   }
  // }, [userInfo]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
