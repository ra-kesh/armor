import {useWishList} from '../hook'
import {ProductCard} from '../component'

export const Wishlist =()=>{
    const {itemsInWishList} = useWishList()

    function WishListbar(){
      return(
        <div className="container">
            <div className='text-left'>
               <h4>You have {itemsInWishList.length} items in your wishlist..</h4>
            </div> 
        </div>
      )
    }
    return (
      <>
      <WishListbar/>
      <div className="container">
        <div className="flex-row wishlist-grid">
        {itemsInWishList.map((item)=>(
          <div className=" flex-col-sm-6 flex-col-lg-4" key={item.id}>
             <ProductCard item={item} />          
          </div>
          ))}
        </div>
      </div> 
      </>
    )
  }
  