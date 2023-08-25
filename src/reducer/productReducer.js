export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET PRODUCT LIST":
      return { ...state, productList: action.payload };
    case "CHANGE PRODUCT PAGE":
      return { ...state, currentPage: action.payload };
    case "SHOW LOADING":
      return { ...state, loading: true };
    case "HIDE LOADING":
      return { ...state, loading: false };

    default:
      break;
  }
};

export const initialState = {
  currentPage: 1,
  totalPages: null,
  productList: [],
  loading: false,
};
