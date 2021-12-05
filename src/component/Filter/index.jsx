import React from "react";
import { useControl } from "../../hooks";
import style from "./Filter.module.css";

export const Filter = () => {
  const { otherFilters, filterOutOfStock, filterFastDelivery } = useControl();

  return (
    <div className="filter">
      <span className={style.filter_heading}>Filter</span>
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
  );
};