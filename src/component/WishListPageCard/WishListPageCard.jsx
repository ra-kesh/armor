import { useActions } from "../../hooks";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";

export const WishListPageCard = ({ item }) => {
  const { moveToCart, removeFromWishList } = useActions();

  const navigate = useNavigate();

  return (
    <div className="ecom-card">
      <div className="ecom-card-pic hover-image">
        <img src={item.product.image} alt="jackets" />
        {item.product.inStock ? (
          <button
            className="ecom-card-btn trans-04"
            onClick={() => moveToCart(item.product._id)}
          >
            Move to cart
          </button>
        ) : (
          <button className="ecom-card-btn trans-04">out of stock</button>
        )}
      </div>
      <div className="ecom-card-desc flex-row">
        <div className="flex-col-10 flex-dir-col text-left">
          <span>₹{item.product.price}</span>
          <span
            className="ecom-card-name"
            onClick={() => navigate(`/products/${item._id}`)}
          >
            {item.product.name}
          </span>
        </div>
        <div className="flex-col-2 text-right pointer">
          <div onClick={() => removeFromWishList(item.product._id)}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
