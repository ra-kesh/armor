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
      type: "TOGGLE_PRODUCTS",
    });
  };

  const filterFastDelivery = () => {
    dispatch({
      type: "TOGGLE_DELIVERY",
    });
  };
  const filterJackets = () => {
    dispatch({
      type: "FILTER",
      payload: "JACKETS",
    });
  };
  const filterHelmets = () => {
    dispatch({
      type: "FILTER",
      payload: "HELMETS",
    });
  };
  const filterGloves = () => {
    dispatch({
      type: "FILTER",
      payload: "GLOVES",
    });
  };
  const filterShoes = () => {
    dispatch({
      type: "FILTER",
      payload: "SHOES",
    });
  };
  const showAll = () => {
    dispatch({
      type: "FILTER",
      payload: "ALL",
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
    showAll,
  };
};
