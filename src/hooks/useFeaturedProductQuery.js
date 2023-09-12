import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";
import useLinkState from "./useLinkState";

const fetchFeaturedProducts = async (page, perPage) => {
  const { data: response } = await axios.get(
    `${apiUrl}/products/featured?page=${page}&per_page=${perPage}`
  );

  return response;
};

const useFeaturedProductsQuery = () => {
  const { page, perPage } = useLinkState();

  return useQuery({
    queryKey: ["featured-products", page, perPage],
    queryFn: () => fetchFeaturedProducts(page, perPage),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useFeaturedProductsQuery;
