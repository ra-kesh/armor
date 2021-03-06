import { createContext, useReducer } from "react";
import { controlReducer } from "../reducer";

export const ControlContext = createContext();

export const ControlProvider = ({ children }) => {
  const [state, dispatch] = useReducer(controlReducer, {
    sortBy: "DEFAULT",
    filterByCategory: "ALL",
    otherFilters: {
      showAllProducts: true,
      showOnlyFastDelivery: false,
      showOnlyRatingsAboveFour: false,
      showOnlyRatingsAboveThree: false,
      showOnlyRatingsAboveTwo: false,
      showOnlyRatingsAboveOne: false,
      priceRangeControl: 10000,
    },
  });

  return (
    <ControlContext.Provider value={{ state, dispatch }}>
      {children}
    </ControlContext.Provider>
  );
};
