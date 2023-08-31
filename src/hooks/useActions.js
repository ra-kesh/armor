import { useAuth, useUserData } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useCartMutations } from "../view/Cart/hooks/CartMutations";
import { useWishListMutations } from "../view/WishList/hooks/WishListMutations";

export const useActions = () => {
  const { userInfo } = useAuth();
  const { cartList, wishList } = useUserData();

  const {
    addToCartMutation,
    removeFromCartMutation,
    updateCartQuantityMutation,
    moveFromWCartToWishListMutation,
  } = useCartMutations();

  const {
    removeFromWishListMutation,
    addToWishListMutation,
    moveFromWishListToCartMutation,
  } = useWishListMutations();

  const navigate = useNavigate();

  const isInWishList = (id) => {
    return wishList.some(({ product }) => product._id === id);
  };

  const isInCart = (id) => {
    return cartList.some(({ product }) => product._id === id);
  };

  const handleAddtoWishlistMuation = (event, product, path) => {
    event.stopPropagation();
    if (!userInfo) {
      navigate("/login", {
        state: {
          from: path,
          message: "Before adding to wishlist you need to login first ",
        },
      });
      return;
    }
    addToWishListMutation.mutate(product);
  };

  const handleRemoveFromWishlistMuation = (event, productId) => {
    event.stopPropagation();
    removeFromWishListMutation.mutate(productId);
  };

  const handleAddtoCartMuation = (event, product, path) => {
    event.stopPropagation();
    if (!userInfo) {
      navigate("/login", {
        state: {
          from: path,
          message: "Before adding to cart you need to login first ",
        },
      });
      return;
    }
    addToCartMutation.mutate(product);
  };

  const handleMoveFromWishListToCartMutation = (event, product) => {
    event.stopPropagation();
    moveFromWishListToCartMutation.mutate(product);
  };

  return {
    isInCart,
    isInWishList,
    removeFromWishListMutation,
    handleRemoveFromWishlistMuation,
    handleMoveFromWishListToCartMutation,
    handleAddtoWishlistMuation,
    handleAddtoCartMuation,
    removeFromCartMutation,
    updateCartQuantityMutation,
    moveFromWishListToCartMutation,
    moveFromWCartToWishListMutation,
  };
};
