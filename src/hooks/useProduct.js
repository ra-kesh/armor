import { useContext, useEffect } from "react";
import { ProductContext } from "../context";
import axios from "axios";
import { apiUrl } from "../constants";

export const useProduct = () => {
  const { state, dispatch } = useContext(ProductContext);
  const { productList } = state;

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: products },
        } = await axios.get(`${apiUrl}/products`);
        dispatch({ type: "GET PRODUCT LIST", payload: products });
      } catch (err) {
        console.log({ error: err.message });
      }
    })();
  }, [dispatch]);

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
    { showAllProducts, showOnlyFastDelivery }
  ) => {
    return productList
      .filter(({ inStock }) => (showAllProducts ? true : inStock))
      .filter(({ fastDelivery }) =>
        showOnlyFastDelivery ? fastDelivery : true
      );
  };

  return {
    productList,
    getSortedProductList,
    getFilteredProductList,
    dispatch,
  };
};
