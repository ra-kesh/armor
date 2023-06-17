import { useControl } from "../../../hooks";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import style from "./ProductBar.module.css";
import MediaQuery from "react-responsive";

export const ProductBar = ({
  showFilterModal,
  setShowFilterModal,
  filterByCategory,
}) => {
  const { filterGloves, filterHelmets, filterJackets, filterShoes, showAll } =
    useControl();

  return (
    <div className="container">
      <div className={style.product_bar}>
        <div className="flex-col-xl-10 flex-col-lg-10 flex-col-md-11 flex-col-sm-11 text-left">
          <div className={style.product_bar_item_container}>
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
        </div>

        <div className="flex-col-xl-2 flex-col-lg-2 flex-col-md-1 flex-col-sm-1 flex-col-1">
          <div
            onClick={() =>
              setShowFilterModal((showFilterModal) => !showFilterModal)
            }
            className={
              showFilterModal ? style.filter_btn_active : style.filter_btn
            }
          >
            {showFilterModal ? (
              <CloseIcon fontSize="small" />
            ) : (
              <FilterListIcon fontSize="small" />
            )}
            <MediaQuery minWidth={1224}>
              <span style={{ marginLeft: ".5rem" }}>Sort & Filter </span>
            </MediaQuery>
          </div>
        </div>
      </div>
    </div>
  );
};
