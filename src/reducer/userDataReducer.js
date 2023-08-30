export const userDataReducer = (state, action) => {
  switch (action.type) {
    case "CALCULATE CART":
      return {
        ...state,
        cartTotal: action.payload.reduce((total, item) => {
          return total + item.price * item.quantity;
        }, 0),
      };
    case "RESET":
      return initialState;

    default:
      break;
  }
};

export const initialState = {
  cartTotal: 0,
  cartList: [],
  wishList: [],
  loading: false,
};
