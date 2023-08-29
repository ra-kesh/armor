import { useNavigate } from "react-router-dom";
import { useActions } from "../../../hooks";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const ProductCard = ({ item, path }) => {
  const {
    isInCart,
    isInWishList,
    handleAddtoWishlistMuation,
    handleRemoveFromWishlistMuation,
    handleAddtoCartMuation,
  } = useActions();

  const navigate = useNavigate();

  const WishListButton = isInWishList(item._id) ? (
    <FavoriteIcon
      onClick={(event) => handleRemoveFromWishlistMuation(event, item._id)}
    />
  ) : (
    <FavoriteBorderIcon
      onClick={(event) => handleAddtoWishlistMuation(event, item, path)}
    />
  );

  const CartButton = isInCart(item._id) ? (
    <ShoppingCartIcon
      onClick={(event) => {
        event.stopPropagation();
        navigate("/cart");
      }}
    />
  ) : (
    <ShoppingCartOutlinedIcon
      onClick={(event) => handleAddtoCartMuation(event, item, path)}
    />
  );

  return (
    <div
      className="ecom-card"
      onClick={() => navigate(`/products/${item._id}`)}
    >
      <div className="ecom-card-pic hover-image">
        <img src={item.image} alt={item.category} loading="lazy" />
        <div className="ecom-card-icon">{WishListButton}</div>
      </div>
      <div className="ecom-card-desc flex-row">
        <div className="flex-col-11 flex-dir-col">
          <p className="ecom-card-name">{item.name}</p>
          <p>
            ₹{item.price}{" "}
            <span style={{ textDecoration: "line-through" }}>
              (₹{item.price + item.price / 5})
            </span>
          </p>
        </div>
        <div className="flex-col-1 center-vertically">{CartButton}</div>
      </div>
    </div>
  );
};
