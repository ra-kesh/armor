export const productReducer = (state, action) => {
  switch (action.type) {
    case "GET PRODUCT LIST":
      return { ...state, productList: action.payload };
    case "CHANGE PRODUCT PAGE":
      return { ...state, page: action.payload };
    case "CHANGE PRODUCT CATEGORY":
      return { ...state, page: 1, productCategory: action.payload };
    case "SHOW LOADING":
      return { ...state, loading: true };
    case "HIDE LOADING":
      return { ...state, loading: false };

    default:
      break;
  }
};

export const initialState = {
  page: 1,
  perPage: 6,
  totalPages: null,
  productList: [],
  loading: false,
  productCategory: "all",
};
