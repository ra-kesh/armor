import { Sort } from "./Sort";
import style from "./FilterPanel.module.css";
import OtherFilters from "./OtherFilters";
import PriceFilter from "./PriceFilter";
import RatingFilter from "./RatingFilter";

export const FilterPanel = () => {
  return (
    <div className={style.filter_panel}>
      <div className="flex-col-xl-3 flex-col-lg-4 flex-col-md-6 flex-col-sm-12 m-bottom p-r-one">
        <PriceFilter />
      </div>
      <div className="flex-col-xl-3 flex-col-lg-4 flex-col-md-6 flex-col-sm-12 m-bottom p-l-one">
        <RatingFilter />
      </div>
      <div className="flex-col-xl-3 flex-col-lg-4 flex-col-md-6 flex-col-sm-12 m-bottom">
        <OtherFilters />
      </div>
      <div className="flex-col-xl-3 flex-col-lg-4 flex-col-md-6 flex-col-sm-12 m-bottom">
        <Sort />
      </div>
    </div>
  );
};
