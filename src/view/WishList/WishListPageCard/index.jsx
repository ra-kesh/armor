import { useActions } from "../../../hooks";
import CloseIcon from "@material-ui/icons/Close";
import { useNavigate } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

export const WishListPageCard = ({ item }) => {
  const { moveFromWishListToCartMutation, removeFromWishListMutation } =
    useActions();

  const navigate = useNavigate();

  const CloseButton = (
    <div onClick={() => removeFromWishListMutation.mutate(item.product._id)}>
      <CloseIcon />
    </div>
  );

  return (
    <div className="ecom-card">
      <div className="ecom-card-pic hover-image">
        <img src={item.product.image} alt="jackets" loading="lazy" />
        <div className="ecom-card-icon">{CloseButton}</div>
      </div>
      <div className="ecom-card-desc flex-row">
        <div className="flex-col-11 flex-dir-col text-left">
          <p
            className="ecom-card-name"
            onClick={() => navigate(`/products/${item.product._id}`)}
          >
            {item.product.name}
          </p>
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
              onClick={() =>
                moveFromWishListToCartMutation.mutate(item.product)
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
