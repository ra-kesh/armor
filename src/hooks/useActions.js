import { useAuth, useUserData } from "../hooks";
import axios from "axios";
import { apiUrl } from "../constants";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useActions = () => {
  const { userInfo } = useAuth();
  const { userDispatch, cartList, wishList } = useUserData();
  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const moveToCart = async (_id) => {
    if (isInWishList(_id)) {
      let {
        data: { success },
      } = await axios.post(`${apiUrl}/cart/${userInfo._id}`, {
        product: {
          _id,
        },
      });

      if (success) {
        userDispatch({
          type: "ADD TO CART",
          payload: {
            product: _id,
          },
        });
      }
      let res = await axios.delete(`${apiUrl}/wishlist/${userInfo._id}/${_id}`);

      if (res.data.success) {
        userDispatch({
          type: "REMOVE FROM WISHLIST",
          payload: {
            product: _id,
          },
        });
      }
    }
  };

  const moveToWishList = async (_id) => {
    if (isInCart(_id)) {
      let {
        data: { success },
      } = await axios.post(`${apiUrl}/wishlist/${userInfo._id}`, {
        product: {
          _id,
        },
      });

      if (success) {
        userDispatch({
          type: "ADD TO WISHLIST",
          payload: {
            product: _id,
          },
        });
      }
      let res = await axios.delete(`${apiUrl}/cart/${userInfo._id}/${_id}`);

      if (res.data.success) {
        userDispatch({
          type: "REMOVE FROM CART",
          payload: {
            product: _id,
          },
        });
      }
    }
  };

  const isInWishList = (id) => {
    return wishList.some(({ product }) => product._id === id);
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

  const handleAddtoWishlistMuation = (product, path) => {
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

  const isInCart = (id) => {
    return cartList.some(({ product }) => product._id === id);
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
              _id: item._id,
              name: item.name,
              price: item.price,
              quantity: 1,
              product: {
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

  const handleAddtoCartMuation = (product, path) => {
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

  return {
    isInCart,
    isInWishList,
    moveToCart,
    moveToWishList,
    removeFromWishListMutation,
    handleAddtoWishlistMuation,
    handleAddtoCartMuation,
    removeFromCartMutation,
    updateCartQuantityMutation,
  };
};
