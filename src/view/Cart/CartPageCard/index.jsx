import { useActions } from "../../../hooks";
import { useNavigate } from "react-router-dom";

export const CartPageCard = ({ item }) => {
  const {
    moveFromWCartToWishListMutation,
    removeFromCartMutation,
    updateCartQuantityMutation,
  } = useActions();

  const navigate = useNavigate();

  return (
    <div className="container cart-card">
      <div className="flex-row ">
        <div className="flex-col-xl-2 flex-col-lg-3 flex-col-md-3 flex-col-5">
          <div
            className="cart-pic pointer"
            onClick={() => navigate(`/products/${item.product._id}`)}
          >
            <img src={item.product.image} alt="" />
          </div>
        </div>
        <div className="flex-col-xl-10 flex-col-lg-9  flex-col-md-9 flex-col-7">
          <div className="flex-row p-lg-two">
            <div className="flex-col-xl-10 flex-col-lg-10 flex-col-md-6">
              <div className="cart-desc">
                <span>{item.name}</span>
              </div>
              <div className="cart-qty">
                <span
                  className="counter-btn pointer"
                  onClick={() =>
                    updateCartQuantityMutation.mutate({
                      _id: item.product._id,
                      quantity: item.quantity - 1,
                    })
                  }
                >
                  -
                </span>
                <span className="counter">{item.quantity}</span>
                <span
                  className="counter-btn pointer"
                  onClick={() =>
                    updateCartQuantityMutation.mutate({
                      _id: item.product._id,
                      quantity: item.quantity + 1,
                    })
                  }
                >
                  +
                </span>
              </div>
            </div>
            <div className="flex-col-xl-2 flex-col-lg-2 flex-col-md-6 center-vertically m-top">
              <div className="cart-price text-right">
                <span>₹{item.price}/-</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-row cart-btns">
        <div
          className="flex-col-lg-2 flex-col-6 center-vertically"
          style={{ borderRight: "1px solid var(--less-light-border)" }}
        >
          <span
            className="pointer"
            onClick={() => removeFromCartMutation.mutate(item.product._id)}
          >
            remove
          </span>
        </div>
        <div className="flex-col-lg-10 flex-col-6 center-vertically">
          <span
            className="pointer"
            onClick={() => moveFromWCartToWishListMutation.mutate(item)}
          >
            Move to wishlist
          </span>
        </div>
      </div>
    </div>
  );
};
