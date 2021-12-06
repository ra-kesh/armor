import { useContext } from "react";
import { ProductContext } from "../context";

export const useProduct = () => {
  const { state, dispatch: productDispatch } = useContext(ProductContext);

  const getCategorizedProductList = (productList, filterByCategory) => {
    switch (filterByCategory) {
      case "JACKETS":
        return [...productList].filter((item) => item.category === "jackets");
      case "HELMETS":
        return [...productList].filter((item) => item.category === "helmets");
      case "GLOVES":
        return [...productList].filter((item) => item.category === "gloves");
      case "SHOES":
        return [...productList].filter((item) => item.category === "shoes");
      case "ALL":
        return productList;

      default:
    }
  };

  const getProductsFilteredByPrice = (productList, filterbyPrice) => {
    return [...productList].filter((item) => item.price <= filterbyPrice);
  };

  const getSortedProductList = (productList, sortBy) => {
    switch (sortBy) {
      case "LOW_TO_HIGH":
        return [...productList].sort((a, b) => a.price - b.price);

      case "HIGH_TO_LOW":
        return [...productList].sort((a, b) => b.price - a.price);

      case "DEFAULT":
        return productList;

      default:
    }
  };

  const getFilteredProductList = (
    productList,
    {
      showAllProducts,
      showOnlyFastDelivery,
      showOnlyRatingsAboveFour,
      showOnlyRatingsAboveThree,
      showOnlyRatingsAboveTwo,
      showOnlyRatingsAboveOne,
      priceRangeControl,
    }
  ) => {
    return [...productList]
      .filter(({ inStock }) => (showAllProducts ? true : inStock))
      .filter(({ fastDelivery }) =>
        showOnlyFastDelivery ? fastDelivery : true
      )
      .filter((item) => item.price <= Number(priceRangeControl))
      .filter(({ rating }) => (showOnlyRatingsAboveFour ? rating >= 4 : true))
      .filter(({ rating }) => (showOnlyRatingsAboveThree ? rating >= 3 : true))
      .filter(({ rating }) => (showOnlyRatingsAboveTwo ? rating >= 2 : true))
      .filter(({ rating }) => (showOnlyRatingsAboveOne ? rating >= 1 : true));
  };

  const { productList, loading } = state;

  return {
    productList,
    getSortedProductList,
    getFilteredProductList,
    getCategorizedProductList,
    getProductsFilteredByPrice,
    loading,
    productDispatch,
  };
};
