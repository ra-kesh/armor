import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth } from "../../../hooks";
import { apiUrl } from "../../../constants";

export const useWishListMutations = () => {
  const { userInfo } = useAuth();
  const queryClient = useQueryClient();

  const addToCart = async (product) => {
    const response = await axios.post(`${apiUrl}/cart/${userInfo._id}`, {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });

    return response.data;
  };

  const removeFromWishList = async (_id) => {
    const response = await axios.delete(
      `${apiUrl}/wishlist/${userInfo._id}/${_id}`
    );

    return response.data;
  };

  const removeFromWishListMutation = useMutation({
    mutationFn: removeFromWishList,
    onMutate: async (_id) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          wishList: previousData.wishList.filter(
            (item) => item.product._id !== _id
          ),
        });
      }

      return { previousData };
    },
    onError: (error, context) => {
      // context is not working as it is supposed to be for some reason
      if (context?.previousData) {
        queryClient.setQueryData(["userdata", userInfo], context.previousData);
      }
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userdata", userInfo] });
    },
  });

  const addToWishList = async (item) => {
    const response = await axios.post(`${apiUrl}/wishlist/${userInfo._id}`, {
      _id: item._id,
    });

    return response.data;
  };

  const addToWishListMutation = useMutation({
    mutationFn: addToWishList,
    onMutate: async (item) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          wishList: [
            ...previousData.wishList,
            {
              product: {
                ...item,
              },
            },
          ],
        });
      }

      return { previousData };
    },
    onError: (error, context) => {
      // context is not working as it is supposed to be , need to be fixed later
      if (context?.previousData) {
        queryClient.setQueryData(["userdata", userInfo], context.previousData);
      }
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userdata", userInfo] });
    },
  });

  const moveFromWishListToCart = async (product) => {
    const [removeFromWishListResponse, addToCartResponse] = await Promise.all([
      removeFromWishList(product._id),
      addToCart(product),
    ]);

    return {
      removeFromWishListResponse: removeFromWishListResponse.data,
      addToCartResponse: addToCartResponse.data,
    };
  };

  const moveFromWishListToCartMutation = useMutation({
    mutationFn: moveFromWishListToCart,
    onMutate: async (item) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        const ifItemAlreadyInCart = previousData.cartList.some(
          (cartItem) => cartItem.product._id == item._id
        );

        const updatedCartList = ifItemAlreadyInCart
          ? previousData.cartList
          : [
              ...previousData.cartList,
              {
                name: item.name,
                price: item.price,
                quantity: 1,
                product: {
                  _id: item._id,
                  image: item.image,
                },
              },
            ];

        const updatedWishList = previousData.wishList.filter(
          (wishListItem) => wishListItem.product._id !== item._id
        );

        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          wishList: updatedWishList,
          cartList: updatedCartList,
        });
      }

      return { previousData };
    },
    onError: (error, context) => {
      // context is not working as it is supposed to be , need to be fixed later
      if (context?.previousData) {
        queryClient.setQueryData(["userdata", userInfo], context.previousData);
      }
      console.error(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userdata", userInfo] });
    },
  });

  return {
    addToWishList,
    removeFromWishList,
    removeFromWishListMutation,
    addToWishListMutation,
    moveFromWishListToCartMutation,
  };
};
