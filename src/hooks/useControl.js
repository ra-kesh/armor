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

  const filterJackets = () => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: "JACKETS",
    });
  };
  const filterHelmets = () => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: "HELMETS",
    });
  };
  const filterGloves = () => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: "GLOVES",
    });
  };
  const filterShoes = () => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: "SHOES",
    });
  };
  const showAll = () => {
    dispatch({
      type: "FILTER_BY_CATEGORY",
      payload: "ALL",
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
    filterGloves,
    filterHelmets,
    filterJackets,
    filterShoes,
    showRatingsAboveFour,
    showRatingsAboveThree,
    showRatingsAboveTwo,
    showRatingsAboveOne,
    showAll,
  };
};
