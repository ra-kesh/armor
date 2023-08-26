import { createContext, useReducer } from "react";
import { initialState, productReducer } from "../reducer";
import useProductsQuery from "../hooks/useProductsQuery";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  const { page, perPage, productCategory } = state;

  const {
    data: response,
    isLoading: isProductsLoading,
    isSuccess: isProductsFetched,
  } = useProductsQuery(page, perPage, productCategory);

  const contextValue = {
    state: {
      ...state,
      productList: isProductsFetched ? response.products : [],
      loading: isProductsLoading,
      page: !isProductsLoading && response.page,
      totalPages: !isProductsLoading && response.total_pages,
    },
    dispatch,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
