import useFeaturedProductsQuery from "../../hooks/useFeaturedProductQuery";

export const useFeaturedProducts = () => {
  const {
    data: response,
    isLoading: isFeaturedProductsLoading,
    isSuccess: isFeaturedProductsFetched,
    isPreviousData,
  } = useFeaturedProductsQuery();

  const featuredProductList = isFeaturedProductsFetched
    ? response.products
    : [];
  const page = isFeaturedProductsFetched ? response.page : 1;
  const totalPages = !isFeaturedProductsLoading && response.total_pages;

  return {
    page,
    totalPages,
    featuredProductList,
    featuredProductList,
    isFeaturedProductsLoading,
    isPreviousData,
  };
};
