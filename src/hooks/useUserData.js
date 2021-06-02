import { useContext } from "react";
import { UserDataContext } from "../context";

export const useUserData = () => {
  const { state, dispatch: userDispatch } = useContext(UserDataContext);

  return {
    wishList: state.wishList,
    cartList: state.cartList,
    dataloading: state.loading,
    userDispatch,
  };
};
