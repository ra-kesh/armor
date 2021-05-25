import { createContext, useReducer } from "react";
import { userDataReducer, initialState } from "../reducer/userDataReducer";

export const UserDataContext = createContext();

export const UserDataProvider = ({ children }) => {
  let [state, dispatch] = useReducer(userDataReducer, initialState);
  return (
    <UserDataContext.Provider value={{ state, dispatch }}>
      {children}
    </UserDataContext.Provider>
  );
};
