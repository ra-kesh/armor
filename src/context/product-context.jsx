import { createContext, useReducer } from "react";
import { initialState, productReducer } from "../reducer";
import useProductsQuery from "../hooks/useProductsQuery";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const {
    data: products,
    isLoading: isProductsLoading,
    isSuccess: isProductsFetched,
  } = useProductsQuery();

  const contextValue = {
    state: {
      ...state,
      productList: isProductsFetched ? products : [],
      loading: isProductsLoading,
    },
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
