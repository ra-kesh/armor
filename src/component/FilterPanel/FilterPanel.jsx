import { Filter } from "../Filter/Filter";
import { Sort } from "../Filter/Sort";

export const FilterPanel = () => {
  return (
    <div className="filter-panel flex-row trans-04">
      <div className="flex-col-lg-3">
        <div className="container">
          <Filter />
        </div>
      </div>
      <div className="flex-col-lg-3">
        <div className="container">
          <Sort />
        </div>
      </div>
      {/* <div className="flex-col-lg-3">
                <div className="container">
                  <h3>price</h3>
                </div>
            </div> */}
    </div>
  );
};
