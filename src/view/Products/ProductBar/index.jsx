import { useControl } from "../../../hooks";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
// import SearchIcon from "@mui/icons-material/Search";

export const ProductBar = ({ showFilterModal, setShowFilterModal }) => {
  const { filterGloves, filterHelmets, filterJackets, filterShoes, showAll } =
    useControl();

  return (
    <div className="container">
      <div className="flex-row center-vertically product-bar">
        <div className="flex-col-xl-10 flex-col-lg-10 flex-col-md-8 flex-col-sm-8 text-left">
          <span className="product-bar-item" onClick={showAll}>
            All
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

        <div className="flex-col-xl-2 flex-col-lg-2 flex-col-md-4 flex-col-sm-4">
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
        {/* <div className="flex-col-xl-2 flex-col-lg-2 flex-col-md-4 flex-col-sm-4">
          <div
            onClick={() =>
              setShowFilterModal((showFilterModal) => !showFilterModal)
            }
            className={showFilterModal ? "filter-btn-active" : "filter-btn"}
          >
            {showFilterModal ? (
              <CloseIcon fontSize="small" style={{ marginRight: ".5rem" }} />
            ) : (
              <SearchIcon fontSize="small" style={{ marginRight: ".5rem" }} />
            )}
            <span>Search </span>
          </div>
        </div> */}
      </div>
    </div>
  );
};
