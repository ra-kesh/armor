export const wishListReducer =(state,action) =>{
    switch (action.type) {
        case 'ADD':
            return {
                itemsInWishList: state.itemsInWishList.concat(action.payload)
            }
        case 'REMOVE':
            return {
                itemsInWishList: state.itemsInWishList.filter((item)=>item.id !== action.payload.id)
            }
        default:
            break;
    }
}