// import { useCart } from "../hook"

export const cartReducer = (state,action) => {
    // const {itemsInCart} =useCart();
    switch (action.type) {
        case "INCREMENT":
            return{
                itemsInCart: state.itemsInCart.map((item)=>(
                    item.id===action.payload.id ?
                    {...item,quantity:item.quantity+1} : item
                ))
            }
        case "DECREMENT":
            return{
                itemsInCart: state.itemsInCart.map((item)=>(
                    item.id===action.payload.id && item.quantity >1  ?
                    {...item,quantity:item.quantity-1} : item
                ))
            }
            
        case "REMOVE":
            return{
                itemsInCart: state.itemsInCart.filter((item)=>(
                    item.id !== action.payload.id
                ))
            }
        case "ADD":
            return{
                itemsInCart: state.itemsInCart.concat(action.payload)
                // itemsInCart: [{...action.payload,isInCart:true,...state.itemsInCart}]
            }
            
    
        default:
            break;
    }
}
