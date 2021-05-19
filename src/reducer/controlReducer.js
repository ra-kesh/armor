
export const controlReducer = (state,action) => {

    switch (action.type) {
        case "SORT":
          return {
            ...state,sortBy: action.payload
            // ...state,sortBy: action.payload.type
          };

        case "TOGGLE_PRODUCTS":
          return{
            ...state,filters:{
              ...state.filters,
              showAllProducts: !state.filters.showAllProducts,

            }
          }
        
        case "TOGGLE_DELIVERY" :
            return {
              ...state,filters:{
                ...state.filters,
                showOnlyFastDelivery: !state.filters.showOnlyFastDelivery
              }

            }

        default:
            break;
    }
   
}
