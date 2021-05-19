import {useContext} from 'react'
import {WishListContext} from '../context'

export const useWishList = () => {
    const {itemsInWishList,dispatch} = useContext(WishListContext)
    
    return {
        itemsInWishList,
        dispatch
    }
}
