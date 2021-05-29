import { useAuth, useUserData } from "../../hooks";
import { useEffect, useState } from "react";
import { CartPageCard, Navbar } from "../../component";
import { apiUrl } from "../../constants";
import axios from "axios";

export const Cart = () => {
  const [cartTotal, setCartTotal] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const { userInfo } = useAuth();
  const { cartList } = useUserData();

  useEffect(() => {
    if (userInfo) {
      (async () => {
        const {
          data: { data: cartList },
        } = await axios.get(`${apiUrl}/cart/${userInfo._id}`);
        setCartItems(cartList?.cartItems || []);
      })();
    }
  }, [userInfo, cartList]);

  useEffect(() => {
    if (cartItems.length > 0) {
      const totalAmount = cartItems.reduce((total, item) => {
        return total + item.product.price * item.quantity;
      }, 0);
      setCartTotal(totalAmount);
    } else {
      setCartTotal(0);
    }
  }, [cartItems]);

  function CartBar() {
    return (
      <div className="container text-left">
        <h4>you have {cartItems.length} items in your cart</h4>
      </div>
    );
  }

  function CartPayment() {
    return (
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
    );
  }

  return (
    <>
      <Navbar />
      <>
        <CartBar />
        {cartItems.length >= 1 && (
          <div className="container cart-wrapper">
            <div className="flex-row">
              <div className="flex-col-lg-8 cart-card-wrapper">
                {cartItems.map((item) => (
                  <CartPageCard item={item} key={item._id} />
                ))}
              </div>

              <div className="flex-col-lg-4 ">
                {cartItems.length > 0 && <CartPayment />}
              </div>
            </div>
          </div>
        )}
      </>
      )
    </>
  );
};
