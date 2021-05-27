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
      (async () => {
        try {
          dispatch({ type: "SHOW LOADING" });
          const {
            data: { data: user },
          } = await axios.get(`${apiUrl}/userdata/${userInfo._id}`);
          dispatch({ type: "GET WISHLIST ITEMS", payload: user.wishList });
          dispatch({ type: "GET CART ITEMS", payload: user.cartList });
          dispatch({ type: "HIDE LOADING" });
        } catch (error) {
          console.log(error);
        }
      })();

      // try {
      //   (async function () {
      //     const {
      //       data: { data: user },
      //     } = await axios.get(`${apiUrl}/userdata/${userInfo._id}`);
      //     dispatch({ type: "GET WISHLIST ITEMS", payload: user.wishList });
      //     dispatch({ type: "GET CART ITEMS", payload: user.cartList });
      //   })();
      // } catch (error) {
      //   console.log(error);
      // }
    }
  }, [dispatch, userInfo]);

  return {
    wishList: state.wishList,
    cartList: state.cartList,
    dispatch,
    dataloading: state.loading,
  };
};
