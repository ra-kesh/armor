import { useAuth, useUserData } from "../hooks";
import axios from "axios";
import { apiUrl } from "../constants";

export const useActions = () => {
  const { userInfo } = useAuth();
  const { dispatch, cartList, wishList } = useUserData();

  const addToCart = async (_id) => {
    if (userInfo) {
      const {
        data: { success },
      } = await axios.post(`${apiUrl}/cart/${userInfo._id}`, {
        product: {
          _id,
        },
      });
      console.log(success);
      if (success) {
        dispatch({
          type: "ADD TO CART",
          payload: {
            product: _id,
          },
        });
      }
    }
  };
  const addToWishList = async (_id) => {
    if (userInfo) {
      const {
        data: { success },
      } = await axios.post(`${apiUrl}/wishlist/${userInfo._id}`, {
        product: {
          _id,
        },
      });
      console.log(success);
      if (success) {
        dispatch({
          type: "ADD TO WISHLIST",
          payload: {
            product: _id,
          },
        });
      }
    }
  };

  const removeFromCart = async (_id) => {
    if (userInfo) {
      const {
        data: { success },
      } = await axios.delete(`${apiUrl}/cart/${userInfo._id}/${_id}`);

      if (success) {
        dispatch({
          type: "REMOVE FROM CART",
          payload: {
            product: _id,
          },
        });
      }
    }
  };
  const removeFromWishList = async (_id) => {
    if (userInfo) {
      const {
        data: { success },
      } = await axios.delete(`${apiUrl}/wishlist/${userInfo._id}/${_id}`);

      if (success) {
        dispatch({
          type: "REMOVE FROM WISHLIST",
          payload: {
            product: _id,
          },
        });
      }
    }
  };

  const increment = async (_id, quantity) => {
    const {
      data: { success },
    } = await axios.post(`${apiUrl}/cart/${userInfo._id}/${_id}`, {
      quantity: quantity + 1,
    });

    if (success) {
      dispatch({
        type: "INCREMENT CART",
        payload: {
          product: _id,
        },
      });
    }
    return;
  };

  const decrement = async (_id, quantity) => {
    const {
      data: { success },
    } = await axios.post(`${apiUrl}/cart/${userInfo._id}/${_id}`, {
      quantity: quantity - 1,
    });

    console.log(success);

    if (success) {
      dispatch({
        type: "DECREMENT CART",
        payload: {
          product: _id,
        },
      });
    }
  };

  const isInCart = (id) => {
    return cartList.some(({ product }) => product === id);
  };
  const isInWishList = (id) => {
    return wishList.some(({ product }) => product === id);
  };

  return {
    addToCart,
    addToWishList,
    removeFromCart,
    removeFromWishList,
    increment,
    decrement,
    isInCart,
    isInWishList,
  };
};
