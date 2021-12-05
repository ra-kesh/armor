import { useNavigate } from "react-router-dom";
import ReactImageMagnify from "@blacklab/react-image-magnify";
import style from "./ProdModal.module.css";
import Rating from "@mui/material/Rating";

export function ProductPageModal({
  setShowModal,
  item,
  isInCart,
  isInWishList,
  addToCart,
  addToWishList,
  path,
}) {
  const navigate = useNavigate();
  return (
    <div className="ecom-modal-wrapper">
      <div
        className="ecom-modal-overlay"
        onClick={() => setShowModal(false)}
      ></div>

      <div className="container">
        <div className="ecom-modal-content">
          <button
            className="ecom-modal-close-btn prod-btn"
            onClick={() => setShowModal(false)}
          >
            close
          </button>

          <div className="flex-row">
            <div className="flex-col-lg-6">
              <div className="container">
                <div>
                  <ReactImageMagnify
                    enlargedImagePosition="over"
                    {...{
                      smallImage: {
                        alt: "brand",
                        isFluidWidth: true,
                        src: item?.image,
                      },
                      largeImage: {
                        src: item?.image,
                        width: 1200,
                        height: 1000,
                      },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="flex-col-lg-6">
              <span className={style.prod_modal_subHeader}>
                From {item.brand}
              </span>
              <div className={style.prod_modal_header}>{item.name}</div>
              <Rating value={item.rating} readOnly />
              <div className={style.prod_modal_price}>
                <span className={style.discounted_price_span}>
                  {" "}
                  ₹{item.price}.00
                </span>
                <span className={style.actual_price_span}>
                  {item.price + (item.price * item.discount) / 100}.00
                </span>
              </div>
              <p className={style.prod_modal_desc}>{item.description}</p>

              <div className={style.prod_modal_status}>
                {item.inStock && item.fastDelivery
                  ? "can be shipped today"
                  : item.inStock
                  ? "in stock"
                  : "currently out of stock"}
              </div>

              <div className="flex-row ecom-modal-btns">
                {!isInWishList(item._id) && (
                  <div className="flex-col-6">
                    {isInCart(item._id) ? (
                      <button
                        className={style.prod_modal_button}
                        onClick={() => navigate("/cart")}
                      >
                        go to cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCart(item._id, path)}
                        className={style.prod_modal_button}
                        disabled={!item.inStock}
                      >
                        add to cart
                      </button>
                    )}
                  </div>
                )}

                {!isInCart(item._id) && (
                  <div className="flex-col-6">
                    {!isInWishList(item._id) ? (
                      <button
                        className={style.prod_modal_button}
                        onClick={() => addToWishList(item._id, path)}
                      >
                        add to wishlist
                      </button>
                    ) : (
                      <button
                        className={style.prod_modal_button}
                        onClick={() => navigate("/wishlist")}
                      >
                        go to wishlist
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
