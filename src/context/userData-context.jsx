import { createContext, useReducer } from "react";
import { userDataReducer, initialState } from "../reducer/userDataReducer";
import { useAuth } from "../hooks";
import useUserDataQuery from "../hooks/useUserDataQuery";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  let [state, dispatch] = useReducer(userDataReducer, initialState);

  const { userInfo } = useAuth();

  const {
    data: response,
    isLoading: isUserDataLoading,
    isSuccess: isUserDataFetched,
  } = useUserDataQuery(userInfo);

  const contextValue = {
    state: {
      ...state,
      cartList: isUserDataFetched ? response.cartList : [],
      wishList: isUserDataFetched ? response.wishList : [],
      userProfile: isUserDataFetched ? response.userProfile : {},
      loading: isUserDataLoading,
    },
    dispatch,
  };

  return (
    <UserDataContext.Provider value={contextValue}>
      {children}
    </UserDataContext.Provider>
  );
};
