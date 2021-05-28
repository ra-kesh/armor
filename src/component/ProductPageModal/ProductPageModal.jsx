import { Link } from "react-router-dom";

export function ProductPageModal({
  setShowModal,
  item,
  isInCart,
  isInWishList,
  addToCart,
  addToWishList,
  path,
}) {
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
                <h3>{item.name}</h3>
                <h4>{item.description}</h4>
                <h5>{item.price}</h5>
                {item.inStock && <div>in stock</div>}
                {!item.inStock && <div>out of stock</div>}
                {item.fastDelivery && <div>fast delivery</div>}
                {!item.fastDelivery && <div>slow delivery</div>}

                <div className="flex-row ecom-modal-btns">
                  <div className="flex-col-lg-4">
                    {isInCart(item._id) ? (
                      <Link to="/cart">
                        <button>go to cart</button>{" "}
                      </Link>
                    ) : null}
                    {!isInCart(item._id) ? (
                      <button onClick={() => addToCart(item._id, path)}>
                        add to cart
                      </button>
                    ) : null}
                  </div>
                  <div className="flex-col-lg-4">
                    {!isInWishList(item._id) ? (
                      <button onClick={() => addToWishList(item._id, path)}>
                        add to wishlist
                      </button>
                    ) : null}
                    {isInWishList(item._id) ? (
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
