import React from "react";
import { useControl } from "../../hooks";
import style from "./Filter.module.css";
import Rating from "@mui/material/Rating";
import PriceSlider from "../Slider";

export const Filter = () => {
  const {
    otherFilters,
    filterOutOfStock,
    filterFastDelivery,
    filterByPrice,
    showRatingsAboveFour,
    showRatingsAboveThree,
    showRatingsAboveTwo,
    showRatingsAboveOne,
  } = useControl();

  return (
    <div className="filter">
      <div className="flex-row space-between">
        <div className="col-lg-3">
          <span className={style.filter_heading}>Filter by Price</span>
          <PriceSlider
            priceRangeValue={otherFilters.priceRangeControl}
            filterByPrice={filterByPrice}
          />
        </div>
        <div className="col-lg-5">
          <span className={style.filter_heading}>Filter by Ratings</span>
          <label htmlFor="Ratings Above 4" className="center-vertically">
            <input
              type="checkbox"
              name="filter"
              id="Ratings Above 4"
              onChange={showRatingsAboveFour}
              checked={otherFilters.showOnlyRatingsAboveFour}
            />
            <Rating value={4} readOnly style={{ marginLeft: ".5rem" }} />
          </label>
          <label htmlFor="Ratings Above 3" className="center-vertically">
            <input
              type="checkbox"
              name="filter"
              id="Ratings Above 3"
              onChange={showRatingsAboveThree}
              checked={otherFilters.showOnlyRatingsAboveThree}
            />
            <Rating value={3} readOnly style={{ marginLeft: ".5rem" }} />
          </label>
          <label htmlFor="Ratings Above 2" className="center-vertically">
            <input
              type="checkbox"
              name="filter"
              id="Ratings Above 2"
              onChange={showRatingsAboveTwo}
              checked={otherFilters.showOnlyRatingsAboveTwo}
            />
            <Rating value={2} readOnly style={{ marginLeft: ".5rem" }} />
          </label>
          <label htmlFor="Ratings Above 1" className="center-vertically">
            <input
              type="checkbox"
              name="filter"
              id="Ratings Above 1"
              onChange={showRatingsAboveOne}
              checked={otherFilters.showOnlyRatingsAboveOne}
            />
            <Rating value={1} readOnly style={{ marginLeft: ".5rem" }} />
          </label>
        </div>

        <div className="col-lg-4">
          <span className={style.filter_heading}>Other Filters</span>
          <label htmlFor="out-of-stock">
            <input
              type="checkbox"
              name="filter"
              id="out-of-stock"
              onChange={filterOutOfStock}
              checked={otherFilters.showAllProducts}
            />
            include out of stock
          </label>
          <label htmlFor="fast-delivery">
            <input
              type="checkbox"
              name="filter"
              id="fast-delivery"
              onChange={filterFastDelivery}
              checked={otherFilters.showOnlyFastDelivery}
            />
            only fast delivery
          </label>
        </div>
      </div>
    </div>
  );
};
