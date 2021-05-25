import { useProduct, useActions } from "../../hooks";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";

export const WishListPageCard = ({ item }) => {
  const { moveToCart, removeFromWishlist } = useActions();
  const { productList } = useProduct();
  const product = productList.find((prod) => prod._id === item.product);

  return (
    <div className="ecom-card">
      <div className="ecom-card-pic hover-image">
        <img src={product.image} alt="jackets" />
        {/* {!isInCart()&&( */}
        <button className="ecom-card-btn trans-04" onClick={moveToCart}>
          Move to cart
        </button>
        {/* )} */}
        {/* {isInCart()&&(
                 <Link to='/cart'>
                  <button className='ecom-card-btn trans-04'onClick={removeFromWishlist}>Go to cart</button>
                 </Link>
              )} */}
      </div>
      <div className="ecom-card-desc flex-row">
        <div className="flex-col-10 flex-dir-col text-left">
          <span>₹{product.price}</span>
          <Link to={`/products/${product.id}`}>
            <span>{product.name}</span>
          </Link>
        </div>
        <div className="flex-col-2 text-right">
          <div onClick={removeFromWishlist}>
            <CloseIcon />
          </div>
        </div>
      </div>
    </div>
  );
};
