import React from "react";
import withLayout from "../../utils/withLayout";
import Carousel from "../../component/Caroursel/Carousel.component";
import { useFeaturedProducts } from "./useFeatureProducts";
import FeaturedProducts from "./FeaturedProducts.component";

const Home = () => {
  const { featuredProductList } = useFeaturedProducts();

  return (
    <div className="container">
      <Carousel images={images} />

      <div className="flex-col gap-2">
        <h4>Featured Products</h4>

        <FeaturedProducts featuredProductList={featuredProductList} />
      </div>
    </div>
  );
};

export default withLayout(Home);

const images = [
  "/hero/image_8_v1.webp",
  // "/hero/image_1_v1.webp",
  "/hero/image_2_v1.webp",
  // "/hero/image_3_v1.webp",
  // "/hero/image_4_v1.webp",
  "/hero/image_5_v1.webp",
  // "/hero/image_6_v1.webp",
  "/hero/image_7_v1.webp",
];
