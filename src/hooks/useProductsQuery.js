import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";

const useProductsQuery = (limit = 9, skip = 0) => {
  const fetchProducts = async () => {
    const { data: response } = await axios.get(
      `${apiUrl}/products?limit=${limit}&skip=${skip}`
    );

    return response;
  };

  return useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProducts(),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
  });
};

export default useProductsQuery;
