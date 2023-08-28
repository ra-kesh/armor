export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "SHOW LOADING":
      return { ...state, loading: true };
    case "HIDE LOADING":
      return { ...state, loading: false };
    case "GET CART ITEMS":
      return {
        ...state,
        cartList: action.payload,
      };
    case "GET WISHLIST ITEMS":
      return {
        ...state,
        wishList: action.payload,
      };
    case "ADD TO CART":
      return {
        ...state,
        cartList: state.cartList.concat({
          product: action.payload.product,
          quantity: 1,
        }),
      };
    case "ADD TO WISHLIST":
      return {
        ...state,
        wishList: state.wishList.concat({
          product: action.payload.product,
        }),
      };
    case "REMOVE FROM CART":
      return {
        ...state,
        cartList: state.cartList.filter(
          ({ product }) => product._id !== action.payload.product
        ),
      };

    case "INCREMENT CART":
      return {
        ...state,
        cartList: state.cartList.map((item) => {
          if (item.product._id === action.payload.product) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }),
      };
    case "DECREMENT CART":
      return {
        ...state,
        cartList: state.cartList.map((item) => {
          if (item.product._id === action.payload.product) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }),
      };
    case "RESET":
      return initialState;

    default:
      break;
  }
};

export const initialState = {
  cartList: [],
  wishList: [],
  loading: false,
};
