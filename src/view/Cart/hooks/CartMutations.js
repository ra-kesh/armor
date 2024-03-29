import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useAuth, useUserData } from "../../../hooks";
import { apiUrl } from "../../../constants";

export const useCartMutations = () => {
  const { userDispatch } = useUserData();
  const { userInfo } = useAuth();

  const queryClient = useQueryClient();

  const addToWishList = async (item) => {
    const response = await axios.post(`${apiUrl}/wishlist/${userInfo._id}`, {
      _id: item._id,
    });

    return response.data;
  };

  const addToCart = async (product) => {
    const response = await axios.post(`${apiUrl}/cart/${userInfo._id}`, {
      _id: product._id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });

    return response.data;
  };

  const addToCartMutation = useMutation({
    mutationFn: addToCart,
    onMutate: async (item) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          cartList: [
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

  const removeFromCart = async (_id) => {
    const response = await axios.delete(
      `${apiUrl}/cart/${userInfo._id}/${_id}`
    );

    return response.data;
  };

  const removeFromCartMutation = useMutation({
    mutationFn: removeFromCart,
    onMutate: async (_id) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          cartList: previousData.cartList.filter(
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

  const updateCart = async ({ _id, quantity }) => {
    const response = await axios.post(`${apiUrl}/cart/${userInfo._id}/${_id}`, {
      quantity,
    });
    return response.data;
  };

  const updateCartQuantityMutation = useMutation({
    mutationFn: updateCart,
    onMutate: async ({ _id, quantity }) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          cartList: previousData.cartList.filter((item) =>
            item.product._id === _id ? (item.quantity = quantity) : item
          ),
        });
      }

      return { previousData };
    },
    onSuccess: () => {
      const updatedData = queryClient.getQueryData(["userdata", userInfo]);
      userDispatch({
        type: "CALCULATE CART",
        payload: updatedData.cartList,
      });
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

  const moveFromCartToWishList = async (product) => {
    const [removeFromCartResponse, addToWishListResponse] = await Promise.all([
      removeFromCart(product.product._id),
      addToWishList(product.product),
    ]);

    return {
      removeFromCartResponse: removeFromCartResponse.data,
      addToWishListResponse: addToWishListResponse.data,
    };
  };

  const moveFromWCartToWishListMutation = useMutation({
    mutationFn: moveFromCartToWishList,
    onMutate: async (product) => {
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        const ifItemAlreadyInWishlist = previousData.wishList.some(
          (wishListItem) => wishListItem.product._id === product.product._id
        );

        const updatedWishList = ifItemAlreadyInWishlist
          ? previousData.wishList
          : [
              ...previousData.wishList,
              {
                product: {
                  _id: product.product._id,
                  name: product.name,
                  price: product.price,
                  image: product.product.image,
                },
              },
            ];

        const updatedCartList = previousData.cartList.filter(
          (item) => item.product._id !== product.product._id
        );

        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          cartList: updatedCartList,
          wishList: updatedWishList,
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
    addToCart,
    removeFromCart,
    addToCartMutation,
    removeFromCartMutation,
    updateCartQuantityMutation,
    moveFromWCartToWishListMutation,
  };
};
