import { useContext } from "react";
import { ControlContext } from "../context";

export const useControl = () => {
  const { state, dispatch } = useContext(ControlContext);

  const sortLowToHigh = () => {
    dispatch({
      type: "SORT",
      payload: "LOW_TO_HIGH",
    });
  };
  const sortHighToLow = () => {
    dispatch({
      type: "SORT",
      payload: "HIGH_TO_LOW",
    });
  };

  const resetSort = () => {
    dispatch({
      type: "SORT",
      payload: "DEFAULT",
    });
  };

  const filterOutOfStock = () => {
    dispatch({
      type: "FILTER_OUT_OF_STOCK",
    });
  };

  const filterFastDelivery = () => {
    dispatch({
      type: "FILTER_FAST_DELIVERY",
    });
  };

  const filterByPrice = (e) => {
    dispatch({
      type: "PRICE_RANGE_SORT",
      payload: e.target.value,
    });
  };

  const showRatingsAboveFour = () => {
    dispatch({
      type: "FILTER_RATINGS_ABOVE_FOUR",
    });
  };
  const showRatingsAboveThree = () => {
    dispatch({
      type: "FILTER_RATINGS_ABOVE_THREE",
    });
  };
  const showRatingsAboveTwo = () => {
    dispatch({
      type: "FILTER_RATINGS_ABOVE_TWO",
    });
  };
  const showRatingsAboveOne = () => {
    dispatch({
      type: "FILTER_RATINGS_ABOVE_ONE",
    });
  };

  return {
    ...state,
    sortHighToLow,
    sortLowToHigh,
    resetSort,
    filterFastDelivery,
    filterOutOfStock,
    filterByPrice,
    showRatingsAboveFour,
    showRatingsAboveThree,
    showRatingsAboveTwo,
    showRatingsAboveOne,
  };
};
