import { useLocation, useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks";
import style from "./ProductDetail.module.css";
import Rating from "@mui/material/Rating";

export const ProductDetailDescription = ({ currentProduct }) => {
  const { addToCart, addToWishList, isInCart, isInWishList } = useActions();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname + location.search;

  return (
    <div className="flex-col-lg-6">
      <div className="container product-desc">
        <span className={style.product_subHeader}>
          From {currentProduct.brand}
        </span>
        <div className={style.product_header}>{currentProduct.name}</div>
        <Rating value={currentProduct.rating} readOnly />
        <div className={style.product_price}>
          <span className={style.discounted_price_span}>
            {" "}
            ₹{currentProduct.price}.00
          </span>
          <span className={style.actual_price_span}>
            {currentProduct.price +
              (currentProduct.price * currentProduct.discount) / 100}
            .00
          </span>
        </div>
        <p className={style.product_desc}>{currentProduct.description}</p>

        <div className={style.product_status}>
          {currentProduct.inStock && currentProduct.fastDelivery
            ? "can be shipped today"
            : currentProduct.inStock
            ? "in stock"
            : "currently out of stock"}
        </div>

        <div className={style.product_button_row}>
          {!isInWishList(currentProduct._id) && (
            <div className="flex-col-6">
              {isInCart(currentProduct._id) ? (
                <button
                  className={style.product_button}
                  onClick={() => navigate("/cart")}
                >
                  go to cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(currentProduct._id, path)}
                  className={style.product_button}
                  disabled={!currentProduct.inStock}
                >
                  add to cart
                </button>
              )}
            </div>
          )}

          {!isInCart(currentProduct._id) && (
            <div className="flex-col-6">
              {!isInWishList(currentProduct._id) ? (
                <button
                  className={style.product_button}
                  onClick={() => addToWishList(currentProduct._id, path)}
                >
                  add to wishlist
                </button>
              ) : (
                <button
                  className={style.product_button}
                  onClick={() => navigate("/wishlist")}
                >
                  go to wishlist
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
