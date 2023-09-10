import React from "react";
import style from "./FilterPanel.module.css";
import useLinkState from "../../hooks/useLinkState";

const OtherFilters = () => {
  const { updateQueryParam, filters } = useLinkState();

  return (
    <>
      <span className={style.filter_heading}>Filter by Availability</span>
      <label htmlFor="fast-delivery">
        <input
          type="checkbox"
          name="filter"
          id="fast-delivery"
          onChange={() =>
            updateQueryParam("filter", { fast_products: !filters.fastProducts })
          }
          checked={filters.fastProducts}
        />
        only fast delivery
      </label>
      <label htmlFor="in-stock">
        <input
          type="checkbox"
          name="filter"
          id="in-stock"
          onChange={() =>
            updateQueryParam("filter", {
              in_stock_products: !filters.inStockProducts,
            })
          }
          checked={filters.inStockProducts}
        />
        only in stock
      </label>
    </>
  );
};

export default OtherFilters;
