import {useContext} from 'react'
import {CartContext} from '../context'

export const useCart = () => {
    const {itemsInCart,dispatch} = useContext(CartContext);
  
    return {
        dispatch,
        itemsInCart,
    }
}
