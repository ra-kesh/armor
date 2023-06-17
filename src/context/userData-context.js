import { createContext, useReducer, useEffect } from "react";
import { userDataReducer, initialState } from "../reducer/userDataReducer";
import axios from "axios";
import { useAuth } from "../hooks";
import { apiUrl } from "../constants";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  let [state, dispatch] = useReducer(userDataReducer, initialState);

  const { userInfo } = useAuth();

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    if (userInfo) {
      (async () => {
        try {
          dispatch({ type: "SHOW LOADING" });
          const {
            data: { data: user },
          } = await axios.get(`${apiUrl}/userdata/${userInfo._id}`, {
            cancelToken,
          });
          dispatch({
            type: "GET WISHLIST ITEMS",
            payload: user.wishList,
          });
          dispatch({ type: "GET CART ITEMS", payload: user.cartList });
          dispatch({ type: "HIDE LOADING" });
        } catch (error) {
          console.log(error);
        }
      })();
    }

    return () => {
      source.cancel();
    };
  }, [dispatch, userInfo]);

  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
