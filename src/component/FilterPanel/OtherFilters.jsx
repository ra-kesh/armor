import React from "react";
import { useControl } from "../../hooks";
import style from "./FilterPanel.module.css";

const OtherFilters = () => {
  const { otherFilters, filterOutOfStock, filterFastDelivery } = useControl();
  return (
    <>
      <span className={style.filter_heading}>Other Filters</span>
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
    </>
  );
};

export default OtherFilters;
