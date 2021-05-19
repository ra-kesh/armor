import {createContext,useReducer} from 'react'
import {cartReducer} from '../reducer'

export const CartContext = createContext();

export const CartProvider = ({children})=>{

    // const [itemsInCart,setItemsInCart] = useState([]);
    const [state, dispatch] = useReducer(cartReducer, {
        itemsInCart : []
      });

    return(
        <CartContext.Provider value={{itemsInCart : state.itemsInCart, dispatch}}>
              {children}
        </CartContext.Provider>
    )
    
}