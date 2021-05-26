import { useContext, useEffect } from "react";
import { UserDataContext } from "../context";
import { useAuth } from "./useAuth";
import { apiUrl } from "../constants";
import axios from "axios";

export const useUserData = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo) {
      try {
        (async function () {
          const {
            data: { data: user },
          } = await axios.get(`${apiUrl}/userdata/${userInfo._id}`);
          dispatch({ type: "GET CART ITEMS", payload: user.cartList });
          dispatch({ type: "GET WISHLIST ITEMS", payload: user.wishList });
        })();
      } catch (error) {
        console.log(error);
      }
    }
  }, [dispatch, userInfo]);

  return {
    cartList: state.cartList,
    wishList: state.wishList,
    dispatch,
  };
};
