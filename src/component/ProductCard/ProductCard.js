import { useLocation, Link } from "react-router-dom";
import { useActions } from "../../hooks";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useState } from "react";

export const ProductCard = ({ item }) => {
  const { pathname } = useLocation();

  const {
    addToCart,
    addToWishList,
    isInCart,
    isInWishList,
    removeFromWishList,
  } = useActions();

  const [showModal, setShowModal] = useState(false);

  function ProductPageCard() {
    return (
      <div className="ecom-card">
        <div className="ecom-card-pic hover-image">
          <img src={item.image} alt="jackets" />
          <button
            className="ecom-card-btn trans-04"
            onClick={() => setShowModal(true)}
          >
            Quick View
          </button>
        </div>
        <div className="ecom-card-desc flex-row">
          <div className="flex-col-10 flex-dir-col">
            <span>₹{item.price}</span>
            <Link to={`/products/${item._id}`}>
              <span>{item.name}</span>
            </Link>
          </div>
          <div className="flex-col-2 text-right">
            {isInWishList() && !isInCart() && (
              <div onClick={() => removeFromWishList(item._id)}>
                <FavoriteIcon />
              </div>
            )}
            {!isInWishList(item._id) && !isInCart(item._id) && (
              <div onClick={() => addToWishList(item._id)}>
                <FavoriteBorderIcon />
              </div>
            )}
            {isInCart() && (
              <Link to="/cart">
                <div>
                  <ShoppingCartIcon />
                </div>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }

  function ProductPageModal() {
    return (
      <div className="ecom-modal-wrapper">
        <div
          className="ecom-modal-overlay"
          onClick={() => setShowModal(false)}
        ></div>

        <div className="container">
          <div className="ecom-modal-content">
            <button
              className="ecom-modal-close-btn"
              onClick={() => setShowModal(false)}
            >
              close
            </button>

            <div className="flex-row">
              <div className="flex-col-lg-6">
                <div className="modal-pic">
                  <img src={item.image} alt="jackets" />
                </div>
              </div>

              <div className="flex-col-lg-6">
                <div className="ecom-modal-desc">
                  <h3>{item.description}</h3>
                  <h5>{item.price}</h5>
                  {item.inStock && <div>in stock</div>}
                  {!item.inStock && <div>out of stock</div>}
                  {item.fastDelivery && <div>fast delivery</div>}
                  {!item.fastDelivery && <div>slow delivery</div>}

                  <div className="flex-row ecom-modal-btns">
                    <div className="flex-col-lg-4">
                      {isInCart() ? (
                        <Link to="/cart">
                          <button>go to cart</button>{" "}
                        </Link>
                      ) : null}
                      {!isInCart() ? (
                        <button onClick={() => addToCart(item._id)}>
                          add to cart
                        </button>
                      ) : null}
                    </div>
                    <div className="flex-col-lg-4">
                      {!isInWishList() ? (
                        <button onClick={() => addToWishList(item._id)}>
                          add to wishlist
                        </button>
                      ) : null}
                      {isInWishList() ? (
                        <Link to="/wishlist">
                          <button>go to wishlist</button>{" "}
                        </Link>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // function WishListPageCard() {
  //   return (
  //     <div className="ecom-card">
  //       <div className="ecom-card-pic hover-image">
  //         <img src={item.image} alt="jackets" />
  //         {/* {!isInCart()&&( */}
  //         <button className="ecom-card-btn trans-04" onClick={moveToCart}>
  //           Move to cart
  //         </button>
  //         {/* )} */}
  //         {/* {isInCart()&&(
  //                <Link to='/cart'>
  //                 <button className='ecom-card-btn trans-04'onClick={removeFromWishlist}>Go to cart</button>
  //                </Link>
  //             )} */}
  //       </div>
  //       <div className="ecom-card-desc flex-row">
  //         <div className="flex-col-10 flex-dir-col text-left">
  //           <span>₹{item.price}</span>
  //           <Link to={`/products/${item.id}`}>
  //             <span>{item.description}</span>
  //           </Link>
  //         </div>
  //         <div className="flex-col-2 text-right">
  //           <div onClick={removeFromWishlist}>
  //             <CloseIcon />
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      {pathname === "/products" && (
        <>
          <ProductPageCard />
          {showModal && <ProductPageModal />}
        </>
      )}

      {/* {pathname === "/wishlist" && <WishListPageCard />} */}
    </>
  );
};
