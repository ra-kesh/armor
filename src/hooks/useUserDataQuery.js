import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";

const fetchUserData = async (userInfo) => {
  const { data: response } = await axios.get(
    `${apiUrl}/userdata/${userInfo._id}`
  );

  return response;
};

const useUserDataQuery = (userInfo) => {
  return useQuery({
    queryKey: ["userdata", userInfo],
    queryFn: () => fetchUserData(userInfo),
    retry: 3,
    cacheTime: 24 * 60 * 1000,
    keepPreviousData: true,
  });
};

export default useUserDataQuery;
