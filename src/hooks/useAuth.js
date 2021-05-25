import { useContext } from "react";
import { AuthContext } from "../context";
import axios from "axios";
import { apiUrl } from "../constants";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const { userInfo, error, loading } = state;

  const login = async (email, password) => {
    try {
      dispatch({
        type: "USER_LOGIN_REQUEST",
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/users/login`,
        { email, password },
        config
      );

      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_LOGIN_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

  const logOut = () => {
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT" });
    document.location.href = "/login";
  };

  return {
    userInfo,
    dispatch,
    error,
    login,
    loading,
    logOut,
  };
};
