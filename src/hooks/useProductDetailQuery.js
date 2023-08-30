import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";

const fetchProductDetail = async (productId) => {
  const { data: response } = await axios.get(`${apiUrl}/products/${productId}`);
  return response.product;
};

const useProductDetailQuery = (productId) => {
  return useQuery({
    queryKey: ["productdetail", productId],
    queryFn: () => fetchProductDetail(productId),
    retry: 3,
    enabled: !!productId,
  });
};

export default useProductDetailQuery;
