import React from "react";
import withLayout from "../../utils/withLayout";
import Carousel from "../../component/Caroursel/Carousel.component";
import { useFeaturedProducts } from "./useFeatureProducts";
import FeaturedProducts from "./FeaturedProducts.component";
import useLinkState from "../../hooks/useLinkState";
import Pagination from "../../component/Pagination/Pagination.component";
import { carouselImages } from "./data";
import { Link } from "react-router-dom";
import WhyUs from "./WhyUs.component";

const Home = () => {
  const { featuredProductList, totalPages, isPreviousData } =
    useFeaturedProducts();

  const { page, updateQueryParam } = useLinkState();

  return (
    <div className="container">
      <Carousel images={carouselImages} />

      <div className="flex-col gap-2">
        <div className="h-12 center-vertically">
          <div>
            <h3>Some products we know you will like</h3>
            <p className="text-center text-mute">see what's trending new</p>
          </div>
        </div>

        <FeaturedProducts featuredProductList={featuredProductList} />

        <Pagination
          page={page}
          totalPages={totalPages}
          isPreviousData={isPreviousData}
          updateQueryParam={updateQueryParam}
        />

        <div className="h-12 center-vertically">
          <Link to="/products">
            <button className="button-outline-dark">VIEW ALL PRODUCTS</button>
          </Link>
        </div>

        <WhyUs />
      </div>
    </div>
  );
};

export default withLayout(Home);
