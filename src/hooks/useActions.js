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

  const addToCart = async (_id, path) => {
    if (userInfo) {
      const {
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
      return;
    }
    navigate("/login", {
      state: {
        from: path,
        message: "Before adding to cart you need to login first",
      },
    });
  };

  const removeFromCart = async (_id) => {
    if (userInfo) {
      const {
        data: { success },
      } = await axios.delete(`${apiUrl}/cart/${userInfo._id}/${_id}`);

      if (success) {
        userDispatch({
          type: "REMOVE FROM CART",
          payload: {
            product: _id,
          },
        });
      }
    }
  };

  const increment = async (_id, quantity) => {
    const {
      data: { success },
    } = await axios.post(`${apiUrl}/cart/${userInfo._id}/${_id}`, {
      quantity: quantity + 1,
    });

    if (success) {
      userDispatch({
        type: "INCREMENT CART",
        payload: {
          product: _id,
        },
      });
    }
    return;
  };

  const decrement = async (_id, quantity) => {
    const {
      data: { success },
    } = await axios.post(`${apiUrl}/cart/${userInfo._id}/${_id}`, {
      quantity: quantity - 1,
    });

    if (success) {
      userDispatch({
        type: "DECREMENT CART",
        payload: {
          product: _id,
        },
      });
    }
  };

  const isInCart = (id) => {
    return cartList.some(({ product }) => product._id === id);
  };

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

  const addToWishList = async (item, path) => {
    const response = await axios.post(`${apiUrl}/wishlist/${userInfo._id}`, {
      _id: item._id,
    });

    return response.data;
  };

  const addToWishListMutation = useMutation({
    mutationFn: addToWishList,
    onMutate: async (item, path) => {
      // if (!userInfo) {
      //   navigate("/login", {
      //     state: {
      //       from: path,
      //       message: "Before adding to wishlist you need to login first ",
      //     },
      //   });
      //   return;
      // }
      await queryClient.cancelQueries({ queryKey: ["userdata", userInfo] });

      const previousData = queryClient.getQueryData(["userdata", userInfo]);

      if (previousData) {
        queryClient.setQueryData(["userdata", userInfo], {
          ...previousData,
          wishList: [
            ...previousData.wishList,
            {
              product: {
                _id: item._id,
                image: item.image,
                inStock: item.inStock,
                name: item.name,
                price: item.price,
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

  return {
    addToCart,
    removeFromCart,
    increment,
    decrement,
    isInCart,
    isInWishList,
    moveToCart,
    moveToWishList,
    removeFromWishListMutation,
    addToWishListMutation,
  };
};
