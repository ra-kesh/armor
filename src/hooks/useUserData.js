import { useContext } from "react";
import { UserDataContext } from "../context";
import useLinkState from "./useLinkState";

export const useUserData = () => {
  const { state, dispatch: userDispatch } = useContext(UserDataContext);

  const { wishList, cartList, loading } = state;

  const { page, perPage } = useLinkState();

  const totalWishlistPages = Math.ceil(wishList.length / perPage);
  const totalCartlistPages = Math.ceil(cartList.length / perPage);

  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;

  const pagiNatedWishlist = wishList.slice(startIndex, endIndex);
  const pagiNatedCartlist = cartList.slice(startIndex, endIndex);

  return {
    ...state,
    dataloading: loading,
    pagiNatedWishlist,
    pagiNatedCartlist,
    userDispatch,
    totalWishlistPages,
    totalCartlistPages,
  };
};
