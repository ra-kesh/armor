import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";

const fetchProducts = async (limit, skip) => {
  const { data: response } = await axios.get(
    `${apiUrl}/products?limit=${limit}&skip=${skip}`
  );

  return response;
};

const useProductsQuery = (limit = 9, skip = 0) => {
  return useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts(limit, skip),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useProductsQuery;
