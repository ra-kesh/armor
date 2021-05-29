import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { Navbar } from "../../component";
import { apiUrl } from "../../constants";
import { useActions } from "../../hooks";

export const ProductDetail = () => {
  const [currentProduct, setCurentProduct] = useState({});
  const { productId } = useParams();

  const location = useLocation();
  const path = location.pathname + location.search;

  const {
    addToCart,
    addToWishList,
    isInCart,
    isInWishList,
    // removeFromWishList,
  } = useActions();

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data: productData },
        } = await axios.get(`${apiUrl}/products/${productId}`);
        setCurentProduct(productData);
      } catch (err) {
        console.log({ error: err.message });
      }
    })();
  }, [productId]);

  return (
    <>
      <Navbar />
      <div className="container product-detail">
        <div className="flex-row">
          <div className="flex-col-lg-6">
            <div className="container">
              <img src={currentProduct.image} alt="" />
            </div>
          </div>
          <div className="flex-col-lg-6">
            <div className="container product-desc">
              <h3>{currentProduct.name}</h3>
              <h5>{currentProduct.description}</h5>
              <h5>Rs.{currentProduct.price}/-</h5>
              <h5>{currentProduct.category}</h5>
              <div className="product-btns flex-row">
                {!isInWishList(currentProduct._id) && (
                  <div className="flex-col-10">
                    {isInCart(currentProduct._id) ? (
                      <Link to="/cart">
                        <button className="button-full">go to cart</button>{" "}
                      </Link>
                    ) : (
                      <button
                        onClick={() => addToCart(currentProduct._id, path)}
                        className="button-full button-outline"
                      >
                        add to cart
                      </button>
                    )}
                  </div>
                )}

                {!isInCart(currentProduct._id) && (
                  <div className="flex-col-10 m-top">
                    {!isInWishList(currentProduct._id) ? (
                      <button
                        className="button-full"
                        onClick={() => addToWishList(currentProduct._id, path)}
                      >
                        add to wishlist
                      </button>
                    ) : (
                      <Link to="/wishlist">
                        <button className="button-full">go to wishlist</button>
                      </Link>
                    )}
                  </div>
                )}
                {/* <div
                  className="flex-col-12 m-bottom"
                  onClick={() => addToCart(currentProduct._id, path)}
                >
                  <button className="button-full button-outline">
                    Add to Cart
                  </button>
                </div>
                <div
                  className="flex-col-12 m-bottom"
                  onClick={() => addToWishList(currentProduct._id, path)}
                >
                  <button className="button-full">Add to Wishlist</button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="container product-additional">
            <div className="flex-dir-col center-vertically">
              <div className="product-detail-bar">
                <span className="product-bar-item">Descriptions</span>
                <span className="product-bar-item">
                  Additional Informations
                </span>
                <span className="product-bar-item">Reviews</span>
              </div>
              <div className="container"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
