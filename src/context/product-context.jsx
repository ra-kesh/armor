import { createContext, useReducer } from "react";
import { initialState, productReducer } from "../reducer";
import useProductsQuery from "../hooks/useProductsQuery";
import { pageLimit } from "../constants";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const {
    data: response,
    isLoading: isProductsLoading,
    isSuccess: isProductsFetched,
  } = useProductsQuery(pageLimit, state.currentPage * pageLimit - pageLimit);

  const contextValue = {
    state: {
      ...state,
      productList: isProductsFetched ? response.products : [],
      loading: isProductsLoading,
      totalPages: !isProductsLoading ? response.total / pageLimit : 1,
    },
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
