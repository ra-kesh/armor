import React from "react";
import PriceSlider from "../Slider";
import style from "./FilterPanel.module.css";
import useLinkState from "../../hooks/useLinkState";

const PriceFilter = () => {
  const { filters, updateQueryParam } = useLinkState();

  const filterByPrice = (event) => {
    updateQueryParam("filter", { price_range: event.target.value });
  };

  return (
    <>
      {" "}
      <span className={style.filter_heading}>Filter by Price</span>
      <PriceSlider
        priceRangeValue={filters.priceRange}
        filterByPrice={filterByPrice}
      />
    </>
  );
};

export default PriceFilter;
