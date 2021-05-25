import { useActions } from "../../hooks";

export const CartPageCard = ({ item, moveToWishlist }) => {
  const { increment, decrement, removeFromCart } = useActions();

  return (
    <div className="container cart-card">
      <div className="flex-row ">
        <div className="flex-col-lg-2">
          <div className="cart-pic pointer">
            <img src={item.product.image} alt="" />
          </div>
        </div>
        <div className="flex-col-lg-10">
          <div className="flex-row p-lg-two">
            <div className="flex-col-lg-10">
              <div className="cart-desc">
                <span>{item.product.name}</span>
              </div>
              <div className="cart-qty">
                <span
                  className="counter-btn pointer"
                  onClick={() => decrement(item.product._id, item.quantity)}
                >
                  -
                </span>
                <span className="counter">{item.quantity}</span>
                <span
                  className="counter-btn pointer"
                  onClick={() => increment(item.product._id, item.quantity)}
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex-col-lg-2">
              <div className="cart-price text-right">
                <span>₹{item.product.price}/-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row cart-btns">
        <div
          className="flex-col-lg-2 center-vertically"
          style={{ borderRight: "1px solid var(--less-light-border)" }}
        >
          <span
            className="pointer"
            onClick={() => removeFromCart(item.product._id)}
          >
            remove
          </span>
        </div>
        <div className="flex-col-lg-10 center-vertically">
          <span className="pointer" onClick={moveToWishlist}>
            Move to wishlist
          </span>
        </div>
      </div>
    </div>
  );
};
