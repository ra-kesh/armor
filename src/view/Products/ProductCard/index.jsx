import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";
import { ProductPageModal } from "../ProductPageModal";
// import style from "./ProductCard.module.css";

export const ProductCard = ({ item, path }) => {
  const {
    addToCart,
    addToWishList,
    isInCart,
    isInWishList,
    removeFromWishList,
  } = useActions();

  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  function ProductPageCard() {
    return (
      <div className="ecom-card">
        <div className="ecom-card-pic hover-image">
          <img src={item.image} alt={item.category} />
          <button
            className="ecom-card-btn trans-04"
            onClick={() => setShowModal(true)}
          >
            Quick View
          </button>
        </div>
        <div className="ecom-card-desc flex-row">
          <div className="flex-col-11 flex-dir-col">
            <span>₹{item.price}</span>
            <span
              className="ecom-card-name"
              onClick={() => navigate(`/products/${item._id}`)}
            >
              {item.name}
            </span>
          </div>
          <div className="flex-col-1 text-right">
            {isInWishList(item._id) && !isInCart(item._id) && (
              <div
                onClick={() => removeFromWishList(item._id)}
                className="ecom-card-icon"
              >
                <FavoriteIcon />
              </div>
            )}

            {!isInWishList(item._id) && !isInCart(item._id) && (
              <div
                onClick={() => addToWishList(item._id, path)}
                className="ecom-card-icon"
              >
                <FavoriteBorderIcon />
              </div>
            )}

            {isInCart(item._id) && (
              <div onClick={() => navigate("/cart")} className="ecom-card-icon">
                <ShoppingCartIcon />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ProductPageCard />
      {showModal && (
        <ProductPageModal
          setShowModal={setShowModal}
          item={item}
          isInCart={isInCart}
          isInWishList={isInWishList}
          addToCart={addToCart}
          addToWishList={addToWishList}
          path={path}
        />
      )}
    </>
  );
};
