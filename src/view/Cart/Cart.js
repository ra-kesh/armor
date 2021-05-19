import {useCart} from '../../hook'
import {useEffect,useState} from 'react'
import {ProductCard} from '../../component'

export const Cart =()=>{

    const {itemsInCart} = useCart();
    const [cartTotal,setCartTotal] = useState(0);
    const [cartQuantity,setCartQuantity] = useState(0);
    
    useEffect(()=>{
        if(itemsInCart.length >0){
            const totalAmount = itemsInCart.reduce((total,item)=>{
                return total+item.price*item.quantity;
            },0)
            setCartTotal(totalAmount)
        }else{
            setCartTotal(0)
        }
    },[itemsInCart])

    useEffect(()=>{
      if(itemsInCart.length>0){
        const totalQuantity = itemsInCart.reduce((total,item)=>{
          return total+item.quantity
        },0)
        setCartQuantity(totalQuantity)
      }else{
        setCartQuantity(0)
      }
    },[itemsInCart])


    
    function CartBar(){
      return(
        <div className="container text-left">
          <h4>you have {cartQuantity} items in your cart</h4>
        </div>
      )
    }

    function CartPayment(){
      return(
        <div className="container cart-payment-wrapper">
          <div className="flex-dir-col">
            <h3>Price details</h3>
            <div className='flex-dir-col price-div'>
              <span>Sub Total : {cartTotal}/-</span>
              <span>Discount : 10% </span>
              <span>Shipping Fee : 200/-</span>
            </div>
            <h4>Total : {cartTotal-cartTotal*10/100+200}</h4>
          </div>
        </div>
      )
    }
   
    return (
      <>
      <CartBar/>
      
      <div className="container cart-wrapper">
        <div className="flex-row">
          <div className="flex-col-lg-8 cart-card-wrapper">
            {itemsInCart.map((item)=>(
              <ProductCard item={item} key={item.id}/> 
              ))}
          </div>
         
          <div className="flex-col-lg-4 ">
            {cartQuantity>0&&(
              <CartPayment/>
            )}
          </div>
        </div>
      </div>
      </>
    )
  }
  