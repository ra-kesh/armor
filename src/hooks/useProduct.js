import { useContext } from "react";
import { ProductContext } from "../context";

export const useProduct = () => {
  const { state, dispatch: productDispatch } = useContext(ProductContext);

  const getProductsFilteredByPrice = (productList, filterbyPrice) => {
    return [...productList]?.filter((item) => item.price <= filterbyPrice);
  };

  const getSortedProductList = (productList, sortBy) => {
    switch (sortBy) {
      case "low_to_high":
        return [...productList].sort((a, b) => a.price - b.price);

      case "high_to_low":
        return [...productList].sort((a, b) => b.price - a.price);

      case "default":
        return productList;
    }
  };

  const getFilteredProductList = (productList, filters) => {
    return [...productList]
      ?.filter(({ inStock }) => (filters.inStockProducts ? inStock : true))
      ?.filter(({ fastDelivery }) =>
        filters.fastProducts ? fastDelivery : true
      )
      .filter((item) => item.price <= Number(filters.priceRange))
      .filter(({ rating }) => (filters.ratingsAboveFour ? rating >= 4 : true))
      .filter(({ rating }) => (filters.ratingsAboveThree ? rating >= 3 : true))
      .filter(({ rating }) => (filters.ratingsAboveTwo ? rating >= 2 : true))
      .filter(({ rating }) => (filters.ratingsAboveOne ? rating >= 1 : true));
  };

  const {
    productList,
    loading,
    totalPages,
    page,
    productCategory,
    isPreviousData,
  } = state;

  return {
    page,
    totalPages,
    productList,
    getSortedProductList,
    getFilteredProductList,
    getProductsFilteredByPrice,
    loading,
    productDispatch,
    productCategory,
    isPreviousData,
  };
};
