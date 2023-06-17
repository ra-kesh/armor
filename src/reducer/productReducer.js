export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET PRODUCT LIST":
      return { ...state, productList: action.payload };
    case "SHOW LOADING":
      return { ...state, loading: true };
    case "HIDE LOADING":
      return { ...state, loading: false };

    default:
      break;
  }
};

export const initialState = {
  productList: [],
  loading: false,
};
