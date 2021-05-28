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

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<User />} />
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </div>
  );
}

export default App;
