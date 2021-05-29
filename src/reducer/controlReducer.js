export const controlReducer = (state, action) => {
  switch (action.type) {
    case "SORT":
      return {
        ...state,
        sortBy: action.payload,
      };
    case "FILTER_BY_CATEGORY":
      return {
        ...state,
        filterByCategory: action.payload,
      };

    case "FILTER_OUT_OF_STOCK":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          showAllProducts: !state.otherFilters.showAllProducts,
        },
      };

    case "FILTER_FAST_DELIVERY":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          showOnlyFastDelivery: !state.otherFilters.showOnlyFastDelivery,
        },
      };

    default:
      break;
  }
};
