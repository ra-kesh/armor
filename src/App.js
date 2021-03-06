import "./App.css";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./utils/PrivateRoute";
import ErrorBoundary from "./utils/ErrorBoundary";

import { Login, User, Home, Signup } from "./view";

const Products = lazy(() => import("./view/Products/ProductsPage"));
const ProductDetail = lazy(() => import("./view/Products/ProductDetailPage"));
const Cart = lazy(() => import("./view/Cart/CartPage"));
const Wishlist = lazy(() => import("./view/WishList/WishListPage"));

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/products" element={<Products />} />
            <Route path="/products/:productId" element={<ProductDetail />} />
            <PrivateRoute path="/cart" element={<Cart />} />
            <PrivateRoute path="/wishlist" element={<Wishlist />} />
            <PrivateRoute path="/user" element={<User />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
