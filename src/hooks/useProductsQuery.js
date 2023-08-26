import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";

const fetchProducts = async (page, perPage, productCategory) => {
  const { data: response } = await axios.get(
    `${apiUrl}/products?page=${page}&per_page=${perPage}&category=${productCategory}`
  );

  return response;
};

const useProductsQuery = (page, perPage, productCategory) => {
  return useQuery({
    queryKey: ["products", page, perPage, productCategory],
    queryFn: () => fetchProducts(page, perPage, productCategory),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useProductsQuery;
