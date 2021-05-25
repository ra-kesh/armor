import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants";

export const ProductDetail = () => {
  const [currentProduct, setCurentProduct] = useState({});
  const { productId } = useParams();

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
              <div className="flex-col-4">
                <button>Add to Cart</button>
              </div>
              <div className="flex-col-4">
                <button>Add to Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <div className="container product-additional">
          <div className="flex-dir-col center-vertically">
            <div className="product-detail-bar">
              <span className="product-bar-item">Descriptions</span>
              <span className="product-bar-item">Additional Informations</span>
              <span className="product-bar-item">Reviews</span>
            </div>
            <div className="container"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
