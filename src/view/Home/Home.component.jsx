import React from "react";
import withLayout from "../../utils/withLayout";
import Carousel from "../../component/Caroursel/Carousel.component";
import { useFeaturedProducts } from "./useFeatureProducts";
import FeaturedProducts from "./FeaturedProducts.component";
import useLinkState from "../../hooks/useLinkState";
import Pagination from "../../component/Pagination/Pagination.component";
import { carouselImages } from "./data";

const Home = () => {
  const { featuredProductList, totalPages, isPreviousData } =
    useFeaturedProducts();

  const { page, updateQueryParam } = useLinkState();

  return (
    <div className="container">
      <Carousel images={carouselImages} />

      <div className="flex-col gap-2">
        <h4>Featured Products</h4>

        <FeaturedProducts featuredProductList={featuredProductList} />

        <Pagination
          page={page}
          totalPages={totalPages}
          isPreviousData={isPreviousData}
          updateQueryParam={updateQueryParam}
        />
      </div>
    </div>
  );
};

export default withLayout(Home);
