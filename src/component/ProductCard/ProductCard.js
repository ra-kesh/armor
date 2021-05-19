import {useLocation,Link} from 'react-router-dom'
import {useCart,useWishList} from '../../hook'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useState} from 'react'


export const ProductCard = ({item}) => {
   
     const { pathname } = useLocation();

     const {dispatch:cartDispatch,itemsInCart} = useCart();
     const {dispatch:wishListDispatch,itemsInWishList} = useWishList();

     const addToCart=(e)=>{
        cartDispatch({type:"ADD",payload:item})
        e.preventDefault();
       }
     const removeFromCart=(e)=>{
        cartDispatch({type:"REMOVE",payload:item})
        e.preventDefault();
       }
     const moveToCart=(e)=>{
      cartDispatch({type:"ADD",payload:item})
      wishListDispatch({type:"REMOVE",payload:item})
      e.preventDefault();
     }

     const increment=()=>{
        cartDispatch({type:"INCREMENT",payload:item})
       }
     const decrement=()=>{
        cartDispatch({type:"DECREMENT",payload:item})
      }

     const addtowishlist=(e)=>{
        wishListDispatch({type:"ADD",payload:item})
        e.preventDefault();
       }
     const removeFromWishlist=(e)=>{
        wishListDispatch({type:"REMOVE",payload:item})
        e.preventDefault();
       }
     const moveToWishlist=(e)=>{
        wishListDispatch({type:"ADD",payload:item})
        cartDispatch({type:"REMOVE",payload:item})
        e.preventDefault();
     }

    function isInCart() {
       return itemsInCart.some((cartItem) => cartItem.id === item.id);
    }
    function isInWishList() {
       return itemsInWishList.some((wishListItem) => wishListItem.id === item.id);
    }

    const [showModal,setShowModal] = useState(false);

    console.log(itemsInWishList)

    function ProductPageCard(){
      return(
        <div className="ecom-card" >
            <div className="ecom-card-pic hover-image">
                 <img src={item.image} alt="jackets"/>
                 <button className='ecom-card-btn trans-04'
                  onClick={()=>setShowModal(true)}
                 >Quick View</button>
            </div>
            <div className='ecom-card-desc flex-row'>
              <div className='flex-col-10 flex-dir-col'>
                  <span>₹{item.price}</span>
                  <Link to={`/products/${item.id}`}>
                      <span>{item.description}</span>
                  </Link>
                
              </div>
              <div className='flex-col-2 text-right'>
               {isInWishList()&&!isInCart()&&(
                  <div onClick={removeFromWishlist}>
                    <FavoriteIcon/>
                  </div>
                  
               )}
               {!isInWishList()&&!isInCart()&&(
                  <div onClick={addtowishlist}> 
                    <FavoriteBorderIcon/>
                  </div>
               )}
               {isInCart()&&(
                  <Link to='/cart'>
                     <div>
                      <ShoppingCartIcon/>
                     </div>
                 </Link>
               )}
                 
              </div>
            </div>
        </div>
      )
    }

    function ProductPageModal(){
       return(
          <div className='ecom-modal-wrapper'>

             <div className="ecom-modal-overlay"
               onClick={()=>setShowModal(false)}
             ></div>

             <div className="container">

               <div className='ecom-modal-content'>

                  <button className='ecom-modal-close-btn'
                     onClick={()=>setShowModal(false)}
                  >close</button>

                  <div className="flex-row">

                     <div className="flex-col-lg-6">

                        <div className="modal-pic">
                           <img src={item.image} alt="jackets"/>
                        </div>
                     </div>

                     <div className="flex-col-lg-6">

                        <div className="ecom-modal-desc">

                           <h3>{item.description}</h3>
                           <h5>{item.price}</h5>
                           {item.inStock&&(<div>in stock</div>)}
                           {!item.inStock&&(<div>out of stock</div>)}
                           {item.fastDelivery&&(<div>fast delivery</div>)}
                           {!item.fastDelivery&&(<div>slow delivery</div>)}

                           <div className="flex-row ecom-modal-btns">
                              <div className='flex-col-lg-4'>
                                 {isInCart()?(
                                    <Link to="/cart"><button>go to cart</button> </Link>
                                 ):null}
                                 {!isInCart()?(
                                    <button onClick={addToCart}>add to cart</button>
                                 ):null}
                                 
                              </div>
                              <div className='flex-col-lg-4'>
                                 {!isInWishList()?(
                                 <button onClick={addtowishlist}>add to wishlist</button>
                                 ):null}  
                                 {isInWishList()?(
                                    <Link to="/wishlist"><button>go to wishlist</button> </Link>
                                 ):null}                      
                              </div>
                             
                           </div>

                        </div>
                     </div>
                  </div>
               </div>
             </div>
          </div>
       )
    }

    function WishListPageCard(){

       return(
         <div className="ecom-card" >
         <div className="ecom-card-pic hover-image">
              <img src={item.image} alt="jackets"/>
              {/* {!isInCart()&&( */}
                 <button className='ecom-card-btn trans-04'onClick={moveToCart}>Move to cart</button>
              {/* )} */}
              {/* {isInCart()&&(
                 <Link to='/cart'>
                  <button className='ecom-card-btn trans-04'onClick={removeFromWishlist}>Go to cart</button>
                 </Link>
              )} */}
         </div>
         <div className='ecom-card-desc flex-row'>
           <div className='flex-col-10 flex-dir-col text-left'>
              <span>₹{item.price}</span>
              <Link to={`/products/${item.id}`}>
                      <span>{item.description}</span>
               </Link>
           </div>
           <div className='flex-col-2 text-right'>
              <div onClick={removeFromWishlist}>
                 <CloseIcon/>
               </div>   
           </div>
         </div>
     </div>

       )
    }

    function CartPageCard(){
       return(
          <div className="container cart-card">
               <div className="flex-row ">
                     <div className="flex-col-lg-2">
                        <div className="cart-pic pointer">
                           <img src={item.image} alt=""/>
                        </div>
                     </div>
                     <div className="flex-col-lg-10">
                        <div className="flex-row p-lg-two">
                           <div className="flex-col-lg-10">
                              <div className="cart-desc">
                                 <span>{item.description}</span>
                              </div>
                              <div className="cart-qty">
                                 <span className='counter-btn pointer' onClick={decrement}>-</span>
                                 <span className='counter'>{item.quantity}</span>
                                 <span className='counter-btn pointer' onClick={increment}>+</span>

                               </div>
                           </div>
                           <div className="flex-col-lg-2">
                              <div className="cart-price text-right">
                                 <span>₹{item.price}/-</span>
                              </div>
                           </div>
                        </div>               
                     </div>
                     
               </div>
               <div className="flex-row cart-btns">
                        <div className="flex-col-lg-2 center-vertically" style={{borderRight:"1px solid var(--less-light-border)"}}>
                           <span className='pointer' onClick={removeFromCart}>remove</span>
                        </div>
                        <div className="flex-col-lg-10 center-vertically">
                           <span className='pointer' onClick={moveToWishlist}>Move to wishlist</span>
                        </div>
               </div>
         </div>
       )
    }



    return (
      <>
         {pathname ==='/products'&&(
            <>
            <ProductPageCard/>
            {showModal&&(
               <ProductPageModal/>
            )}
            </>
         )}

         {pathname==='/wishlist'&&(
            <WishListPageCard/>
         )}

         {pathname==='/cart'&&(
            <CartPageCard/>
         )}
      </>

    )
}
