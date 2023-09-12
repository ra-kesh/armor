import React from "react";
import { ProductCard } from "../Products/ProductCard";

const FeaturedProducts = ({ featuredProductList }) => {
  const featuredProducts = featuredProductList.map((item) => (
    <div className="flex-col-sm-6 flex-col-lg-4" key={item._id}>
      <ProductCard item={item} />
    </div>
  ));

  return <div className="flex-row border-bottom-light">{featuredProducts}</div>;
};

export default FeaturedProducts;
