import { createContext, useReducer } from "react";
import { initialState, productReducer } from "../reducer";
import useProductsQuery from "../hooks/useProductsQuery";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const {
    data: response,
    isLoading: isProductsLoading,
    isSuccess: isProductsFetched,
    isPreviousData,
  } = useProductsQuery();

  const contextValue = {
    state: {
      ...state,
      productList: isProductsFetched ? response.products : [],
      loading: isProductsLoading,
      totalPages: !isProductsLoading && response.total_pages,
      isPreviousData,
    },
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
