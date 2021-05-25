import { useContext, useEffect } from "react";
import { UserDataContext } from "../context";
import { useAuth } from "./useAuth";
import { apiUrl } from "../constants";
import axios from "axios";

export const useUserData = () => {
  const { state, dispatch } = useContext(UserDataContext);
  const { userInfo } = useAuth();

  useEffect(() => {
    const request = axios.CancelToken.source();
    if (userInfo?._id) {
      try {
        (async function () {
          const {
            data: { data: user },
          } = await axios.get(
            `${apiUrl}/userdata/${userInfo._id}?${Date.now()}`,
            {
              cancelToken: request.token,
            }
          );
          dispatch({ type: "GET CART ITEMS", payload: user.cartList });
        })();
      } catch (error) {
        console.log(error);
      }
    }
    return () => {
      request.cancel();
    };
  }, [dispatch, userInfo]);

  return {
    cartList: state.cartList,
    wishList: state.wishList,
    dispatch,
  };
};
