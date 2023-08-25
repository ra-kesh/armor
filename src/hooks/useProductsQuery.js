import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";

const useProductsQuery = () => {
  const fetchProducts = async () => {
    const {
      data: { data: products },
    } = await axios.get(`${apiUrl}/products`);
    return products;
  };

  return useQuery({
    queryKey: ["products"],
    queryFn: () => fetchProducts(),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
  });
};

export default useProductsQuery;
