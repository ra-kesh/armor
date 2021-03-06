import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { apiUrl } from "../../../constants";
import { useActions } from "../../../hooks";
import ReactImageMagnify from "react-image-magnify";
import style from "./ProductDetail.module.css";
import Rating from "@mui/material/Rating";
import {
  Navbar,
  JacketFeatures,
  HelmetFeatures,
  GloveFeatures,
} from "../../../component";

const ProductDetailImage = ({ currentProduct }) => {
  return (
    <div className="flex-col-lg-6">
      <div className="container">
        <div className="product-detail-image">
          <ReactImageMagnify
            enlargedImagePosition="over"
            {...{
              smallImage: {
                alt: "brand",
                isFluidWidth: true,
                src: currentProduct?.image,
              },
              largeImage: {
                src: currentProduct?.image,
                width: 1200,
                height: 1000,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

const ProductDetailDescription = ({ currentProduct }) => {
  const { addToCart, addToWishList, isInCart, isInWishList } = useActions();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname + location.search;

  return (
    <div className="flex-col-lg-6">
      <div className="container product-desc">
        <span className={style.product_subHeader}>
          From {currentProduct.brand}
        </span>
        <div className={style.product_header}>{currentProduct.name}</div>
        <Rating value={currentProduct.rating} readOnly />
        <div className={style.product_price}>
          <span className={style.discounted_price_span}>
            {" "}
            ₹{currentProduct.price}.00
          </span>
          <span className={style.actual_price_span}>
            {currentProduct.price +
              (currentProduct.price * currentProduct.discount) / 100}
            .00
          </span>
        </div>
        <p className={style.product_desc}>{currentProduct.description}</p>

        <div className={style.product_status}>
          {currentProduct.inStock && currentProduct.fastDelivery
            ? "can be shipped today"
            : currentProduct.inStock
            ? "in stock"
            : "currently out of stock"}
        </div>

        <div className={style.product_button_row}>
          {!isInWishList(currentProduct._id) && (
            <div className="flex-col-6">
              {isInCart(currentProduct._id) ? (
                <button
                  className={style.product_button}
                  onClick={() => navigate("/cart")}
                >
                  go to cart
                </button>
              ) : (
                <button
                  onClick={() => addToCart(currentProduct._id, path)}
                  className={style.product_button}
                  disabled={!currentProduct.inStock}
                >
                  add to cart
                </button>
              )}
            </div>
          )}

          {!isInCart(currentProduct._id) && (
            <div className="flex-col-6">
              {!isInWishList(currentProduct._id) ? (
                <button
                  className={style.product_button}
                  onClick={() => addToWishList(currentProduct._id, path)}
                >
                  add to wishlist
                </button>
              ) : (
                <button
                  className={style.product_button}
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
  );
};

const ProductDetail = () => {
  const [currentProduct, setCurentProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { productId } = useParams();

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const {
          data: { data: productData },
        } = await axios.get(`${apiUrl}/products/${productId}`);
        setCurentProduct(productData);
        setIsLoading(false);
      } catch (err) {
        console.log({ error: err.message });
      }
    })();
  }, [productId]);

  return (
    <>
      <Navbar isLoading={isLoading} />
      {!isLoading && (
        <>
          <div className="container product-detail">
            <div className="flex-row">
              <ProductDetailImage currentProduct={currentProduct} />
              <ProductDetailDescription currentProduct={currentProduct} />
            </div>
          </div>
          <div className="container">
            {currentProduct?.category === "jackets" && <JacketFeatures />}
            {currentProduct?.category === "helmets" && <HelmetFeatures />}
            {currentProduct?.category === "gloves" && <GloveFeatures />}
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetail;
