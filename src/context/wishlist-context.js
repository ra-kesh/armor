import {createContext,useReducer} from 'react'
import {wishListReducer} from '../reducer'

export const WishListContext = createContext();

export const WishListProvider = ({children})=>{

    // const [itemsInWishList,setItemsInWishList] = useState([]);
    const [state,dispatch] = useReducer(wishListReducer,{itemsInWishList:[]})

    return(
        <WishListContext.Provider value={{itemsInWishList:state.itemsInWishList, dispatch}}>
          {children}
       </WishListContext.Provider>
    )
    
}