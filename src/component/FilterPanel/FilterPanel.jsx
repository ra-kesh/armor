import { Filter } from "../Filter";
import { Sort } from "../Sort";
import style from "./FilterPanel.module.css";

export const FilterPanel = () => {
  return (
    <div className={style.filter_panel}>
      <div className="flex-col-lg-8">
        <div className="container">
          <Filter />
        </div>
      </div>
      <div className="flex-col-lg-4">
        <div className="container">
          <Sort />
        </div>
      </div>
    </div>
  );
};
