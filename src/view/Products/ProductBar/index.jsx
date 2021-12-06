import { useControl } from "../../../hooks";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import style from "./ProductBar.module.css";
// import SearchIcon from "@mui/icons-material/Search";

export const ProductBar = ({
  showFilterModal,
  setShowFilterModal,
  filterByCategory,
}) => {
  // const [active, setActive] = useState('All')

  const { filterGloves, filterHelmets, filterJackets, filterShoes, showAll } =
    useControl();

  return (
    <div className="container">
      <div className={style.product_bar}>
        <div className="flex-col-xl-10 flex-col-lg-10 flex-col-md-8 flex-col-sm-8 text-left">
          <span
            className={
              filterByCategory === "ALL"
                ? style.product_bar_item_active
                : style.product_bar_item
            }
            onClick={showAll}
          >
            All
          </span>
          <span
            className={
              filterByCategory === "JACKETS"
                ? style.product_bar_item_active
                : style.product_bar_item
            }
            onClick={filterJackets}
          >
            Jackets
          </span>
          <span
            className={
              filterByCategory === "HELMETS"
                ? style.product_bar_item_active
                : style.product_bar_item
            }
            onClick={filterHelmets}
          >
            Helmets
          </span>
          <span
            className={
              filterByCategory === "GLOVES"
                ? style.product_bar_item_active
                : style.product_bar_item
            }
            onClick={filterGloves}
          >
            Gloves
          </span>
          <span
            className={
              filterByCategory === "SHOES"
                ? style.product_bar_item_active
                : style.product_bar_item
            }
            onClick={filterShoes}
          >
            Shoes
          </span>
        </div>

        <div className="flex-col-xl-2 flex-col-lg-2 flex-col-md-4 flex-col-sm-4">
          <div
            onClick={() =>
              setShowFilterModal((showFilterModal) => !showFilterModal)
            }
            className={
              showFilterModal ? style.filter_btn_active : style.filter_btn
            }
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
