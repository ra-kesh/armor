import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import style from "./ProductBar.module.css";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import useLinkState from "../../../hooks/useLinkState";

export const ProductBar = ({ showFilterModal, setShowFilterModal }) => {
  const { category, updateQueryParam } = useLinkState();

  return (
    <div className="container">
      <div className={style.product_bar}>
        <div className="flex-col-xl-10 flex-col-lg-10 flex-col-md-11 flex-col-sm-11 text-left">
          <div className={style.product_bar_item_container}>
            <Link to={updateQueryParam("category", "all")}>
              <span
                className={
                  category === "all"
                    ? style.product_bar_item_active
                    : style.product_bar_item
                }
              >
                All
              </span>
            </Link>
            <Link to={updateQueryParam("category", "jackets")}>
              <span
                className={
                  category === "jackets"
                    ? style.product_bar_item_active
                    : style.product_bar_item
                }
              >
                Jackets
              </span>
            </Link>
            <Link to={updateQueryParam("category", "helmets")}>
              <span
                className={
                  category === "helmets"
                    ? style.product_bar_item_active
                    : style.product_bar_item
                }
              >
                Helmets
              </span>
            </Link>
            <Link to={updateQueryParam("category", "gloves")}>
              <span
                className={
                  category === "gloves"
                    ? style.product_bar_item_active
                    : style.product_bar_item
                }
              >
                Gloves
              </span>
            </Link>
            <Link to={updateQueryParam("category", "shoes")}>
              <span
                className={
                  category === "shoes"
                    ? style.product_bar_item_active
                    : style.product_bar_item
                }
              >
                Shoes
              </span>
            </Link>
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
