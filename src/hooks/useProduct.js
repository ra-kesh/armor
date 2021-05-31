import { useContext, useEffect } from "react";
import { ProductContext } from "../context";
import axios from "axios";
import { apiUrl } from "../constants";

export const useProduct = () => {
  const { state, dispatch: productDispatch } = useContext(ProductContext);

  useEffect(() => {
    const source = axios.CancelToken.source();
    const cancelToken = source.token;
    (async () => {
      try {
        productDispatch({ type: "SHOW LOADING" });
        const {
          data: { data: products },
        } = await axios.get(`${apiUrl}/products`, {
          cancelToken,
        });
        productDispatch({ type: "GET PRODUCT LIST", payload: products });
        productDispatch({ type: "HIDE LOADING" });
      } catch (err) {
        console.log({ error: err.message });
      }
    })();
    return () => {
      source.cancel();
    };
  }, [productDispatch]);

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

  const { productList, loading } = state;

  return {
    productList,
    getSortedProductList,
    getFilteredProductList,
    getCategorizedProductList,
    loading,
  };
};
