import { useContext } from "react";
import { AuthContext } from "../context";
import axios from "axios";
import { apiUrl } from "../constants";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);

  const { userInfo, error, loading } = state;
  const navigate = useNavigate();

  const login = async (email, password, path) => {
    try {
      dispatch({
        type: "USER_REQUEST",
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
        type: "USER_LOGIN",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REQUEST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
    // console.log(path);
    if (path !== undefined) {
      navigate(path, { replace: true });
    } else {
      navigate("/");
    }
  };

  const signup = async (name, email, password, path) => {
    try {
      dispatch({
        type: "USER_REQUEST",
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `${apiUrl}/users/signup`,
        { name, email, password },
        config
      );

      dispatch({
        type: "USER_REGISTER",
        payload: data,
      });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: "USER_REQUEST_FAIL",
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
    if (path !== undefined) {
      navigate(path, { replace: true });
    } else {
      navigate("/");
    }
  };

  const logOut = () => {
    localStorage.removeItem("userInfo");
    dispatch({ type: "USER_LOGOUT" });
    navigate("/login");
  };

  return {
    userInfo,
    dispatch,
    error,
    login,
    loading,
    logOut,
    signup,
  };
};
