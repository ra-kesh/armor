import { useControl } from "../../hooks";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";

export const ProductBar = ({ showFilterModal, setShowFilterModal }) => {
  const { filterGloves, filterHelmets, filterJackets, filterShoes, showAll } =
    useControl();

  return (
    <div className="container">
      <div className="flex-row center-vertically product-bar">
        <div className="flex-col-lg-10 text-left">
          <span className="product-bar-item" onClick={showAll}>
            All Products
          </span>
          <span className="product-bar-item" onClick={filterJackets}>
            Jackets
          </span>
          <span className="product-bar-item" onClick={filterHelmets}>
            Helmets
          </span>
          <span className="product-bar-item" onClick={filterGloves}>
            Gloves
          </span>
          <span className="product-bar-item" onClick={filterShoes}>
            Shoes
          </span>
        </div>

        <div className="flex-col-lg-2">
          <div
            onClick={() =>
              setShowFilterModal((showFilterModal) => !showFilterModal)
            }
            className={showFilterModal ? "filter-btn-active" : "filter-btn"}
          >
            {showFilterModal ? (
              <CloseIcon fontSize="small" style={{ marginRight: ".5rem" }} />
            ) : (
              <FilterListIcon
                fontSize="small"
                style={{ marginRight: ".5rem" }}
              />
            )}
            <span>Sort & Filter </span>
          </div>
        </div>
      </div>
    </div>
  );
};
