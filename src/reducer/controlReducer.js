export const controlReducer = (state, action) => {
  switch (action.type) {
    case "PRICE_RANGE_SORT":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          priceRangeControl: action.payload,
        },
      };

    case "FILTER_BY_PRICE":
      return {
        ...state,
        filterByPrice: action.payload,
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

    case "FILTER_RATINGS_ABOVE_FOUR":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          showOnlyRatingsAboveFour:
            !state.otherFilters.showOnlyRatingsAboveFour,
        },
      };
    case "FILTER_RATINGS_ABOVE_THREE":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          showOnlyRatingsAboveThree:
            !state.otherFilters.showOnlyRatingsAboveThree,
        },
      };
    case "FILTER_RATINGS_ABOVE_TWO":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          showOnlyRatingsAboveTwo: !state.otherFilters.showOnlyRatingsAboveTwo,
        },
      };
    case "FILTER_RATINGS_ABOVE_ONE":
      return {
        ...state,
        otherFilters: {
          ...state.otherFilters,
          showOnlyRatingsAboveOne: !state.otherFilters.showOnlyRatingsAboveOne,
        },
      };

    default:
      break;
  }
};
