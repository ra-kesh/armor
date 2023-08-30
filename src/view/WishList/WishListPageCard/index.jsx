import { useActions } from "../../../hooks";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

export const WishListPageCard = ({ item }) => {
  const {
    handleMoveFromWishListToCartMutation,
    handleRemoveFromWishlistMuation,
  } = useActions();

  const navigate = useNavigate();

  const CloseButton = (
    <CloseIcon
      onClick={(event) =>
        handleRemoveFromWishlistMuation(event, item.product._id)
      }
    />
  );

  return (
    <div
      className="ecom-card"
      onClick={() => navigate(`/products/${item.product._id}`)}
    >
      <div className="ecom-card-pic hover-image">
        <img src={item.product.image} alt="jackets" loading="lazy" />
        <div className="ecom-card-icon">{CloseButton}</div>
      </div>
      <div className="ecom-card-desc flex-row">
        <div className="flex-col-11 flex-dir-col text-left">
          <p className="ecom-card-name">{item.product.name}</p>
          <p>
            ₹{item.product.price}{" "}
            <span style={{ textDecoration: "line-through" }}>
              (₹{item.product.price + item.product.price / 5})
            </span>
          </p>
        </div>
        <div className="flex-col-1  center-vertically">
          {item.product.inStock ? (
            <AddShoppingCartIcon
              onClick={(event) =>
                handleMoveFromWishListToCartMutation(event, item.product)
              }
            />
          ) : (
            <RemoveShoppingCartIcon style={{ cursor: "none" }} />
          )}
        </div>
      </div>
    </div>
  );
};
