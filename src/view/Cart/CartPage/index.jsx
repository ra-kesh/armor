import { useUserData } from "../../../hooks";
import { useEffect, useState } from "react";
import { CartPageCard } from "../CartPageCard";
import { EmptyCartpage } from "../EmptyPageCart";
import withLayout from "../../../utils/withLayout";

const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const { cartList } = useUserData();

  useEffect(() => {
    if (cartList.length > 0) {
      const totalAmount = cartList.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0);
      setCartTotal(totalAmount);
    } else {
      setCartTotal(0);
    }
  }, [cartList]);

  if (cartList.length === 0) {
    return <EmptyCartpage />;
  }

  return (
    <div className="container cart-wrapper">
      <div className="flex-row">
        <div className="flex-col-lg-8 cart-card-wrapper">
          {cartList.map((item) => (
            <CartPageCard item={item} key={item._id} />
          ))}
        </div>

        <div className="flex-col-lg-4 ">
          <div className="container cart-payment-wrapper">
            <div className="flex-dir-col">
              <h3>Price details</h3>
              <div className="flex-dir-col price-div">
                <span>Sub Total : {cartTotal}/-</span>
                <span>Discount : 10% </span>
                <span>Shipping Fee : 200/-</span>
              </div>
              <h4>Total : {cartTotal - (cartTotal * 10) / 100 + 200}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withLayout(Cart);
