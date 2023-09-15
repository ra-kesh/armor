import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";
import useLinkState from "./useLinkState";

const fetchProducts = async (page, perPage, category) => {
  const { data: response } = await axios.get(
    `${apiUrl}/products?page=${page}&per_page=${perPage}&category=${category}`
  );

  return response;
};

const useProductsQuery = () => {
  const { page, perPage, category } = useLinkState();

  return useQuery({
    queryKey: ["products", page, perPage, category],
    queryFn: () => fetchProducts(page, perPage, category),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useProductsQuery;
