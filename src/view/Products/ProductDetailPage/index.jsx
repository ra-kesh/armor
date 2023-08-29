import React from "react";
import { useParams } from "react-router-dom";
import {
  JacketFeatures,
  HelmetFeatures,
  GloveFeatures,
} from "../../../component";
import withLayout from "../../../utils/withLayout";
import useProductDetailQuery from "../../../hooks/useProductDetailQuery";
import { ProductDetailImage } from "./ProductDetailImage";
import { ProductDetailDescription } from "./ProductDetailDescription";

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: currentProduct, isLoading: isProductLoading } =
    useProductDetailQuery(productId);

  return (
    <>
      {!isProductLoading && (
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

export default withLayout(ProductDetail);
