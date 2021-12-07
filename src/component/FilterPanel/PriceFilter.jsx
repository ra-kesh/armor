import React from "react";
import PriceSlider from "../Slider";
import { useControl } from "../../hooks";
import style from "./FilterPanel.module.css";

const PriceFilter = () => {
  const { otherFilters, filterByPrice } = useControl();
  return (
    <>
      {" "}
      <span className={style.filter_heading}>Filter by Price</span>
      <PriceSlider
        priceRangeValue={otherFilters.priceRangeControl}
        filterByPrice={filterByPrice}
      />
    </>
  );
};

export default PriceFilter;
