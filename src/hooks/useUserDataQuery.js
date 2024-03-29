import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { apiUrl } from "../constants";
import { useAuth } from "./useAuth";

const useUserDataQuery = () => {
  const { userInfo } = useAuth();

  return useQuery({
    queryKey: ["userdata", userInfo],
    queryFn: () => fetchUserData(userInfo),
    retry: 3,
    enabled: !!userInfo,
  });
};

export default useUserDataQuery;

const fetchUserData = async (userInfo) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${userInfo.token}`,
    },
  };

  const { data: response } = await axios.get(
    `${apiUrl}/userdata/${userInfo._id}`,
    config
  );

  return response;
};
