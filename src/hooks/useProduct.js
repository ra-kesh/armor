import useLinkState from "./useLinkState";
import useProductsQuery from "./useProductsQuery";

export const useProduct = () => {
  const {
    data: response,
    isLoading: isProductsLoading,
    isSuccess: isProductsFetched,
    isPreviousData,
  } = useProductsQuery();

  const productList = isProductsFetched ? response.products : [];
  const page = isProductsFetched ? response.page : 1;
  const totalPages = !isProductsLoading && response.total_pages;

  const { sortBy, filters } = useLinkState();

  const sortedProductList = getSortedProductList(productList, sortBy);

  const filteredProductList = getFilteredProductList(
    sortedProductList,
    filters
  );

  return {
    page,
    totalPages,
    productList,
    filteredProductList,
    isProductsLoading,
    isPreviousData,
  };
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
    ?.filter(({ fastDelivery }) => (filters.fastProducts ? fastDelivery : true))
    .filter((item) => item.price <= Number(filters.priceRange))
    .filter(({ rating }) => (filters.ratingsAboveFour ? rating >= 4 : true))
    .filter(({ rating }) => (filters.ratingsAboveThree ? rating >= 3 : true))
    .filter(({ rating }) => (filters.ratingsAboveTwo ? rating >= 2 : true))
    .filter(({ rating }) => (filters.ratingsAboveOne ? rating >= 1 : true));
};
