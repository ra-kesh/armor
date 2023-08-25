import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl, pageLimit } from "../constants";

const fetchProducts = async (limit, skip, productCategory) => {
  const { data: response } = await axios.get(
    `${apiUrl}/products?limit=${limit}&skip=${skip}&category=${productCategory}`
  );

  return response;
};

const useProductsQuery = (
  limit = pageLimit,
  skip = 0,
  productCategory = "all"
) => {
  return useQuery({
    queryKey: ["products", limit, skip, productCategory],
    queryFn: () => fetchProducts(limit, skip, productCategory),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useProductsQuery;
