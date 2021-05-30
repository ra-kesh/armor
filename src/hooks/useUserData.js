import { useContext, useEffect } from "react";
import { UserDataContext } from "../context";
import { useAuth } from "./useAuth";
import { apiUrl } from "../constants";
import axios from "axios";

export const useUserData = () => {
  const { state, dispatch: userDispatch } = useContext(UserDataContext);
  const { userInfo } = useAuth();

  useEffect(() => {
    if (userInfo) {
      (async () => {
        try {
          userDispatch({ type: "SHOW LOADING" });
          const {
            data: { data: user },
          } = await axios.get(`${apiUrl}/userdata/${userInfo._id}`);
          userDispatch({ type: "GET WISHLIST ITEMS", payload: user.wishList });
          userDispatch({ type: "GET CART ITEMS", payload: user.cartList });
          userDispatch({ type: "HIDE LOADING" });
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }, [userDispatch, userInfo]);

  return {
    wishList: state.wishList,
    cartList: state.cartList,
    dataloading: state.loading,
  };
};
