export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET PRODUCT LIST":
      return { ...state, productList: action.payload };

    default:
      break;
  }
};

export const initialState = {
  productList: [],
};
