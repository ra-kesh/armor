import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import style from "./ProductBar.module.css";
import MediaQuery from "react-responsive";
import { Link } from "react-router-dom";
import useLinkState from "../../../hooks/useLinkState";

const categories = [
  { label: "All", value: "all" },
  { label: "Jackets", value: "jackets" },
  { label: "Helmets", value: "helmets" },
  { label: "Gloves", value: "gloves" },
  { label: "Shoes", value: "shoes" },
];

export const ProductBar = ({ showFilterModal, setShowFilterModal }) => {
  const { category, updateQueryParam } = useLinkState();

  const prouductBarCategories = categories.map((singleCategory) => (
    <Link
      key={singleCategory.value}
      to={updateQueryParam("category", singleCategory.value)}
      style={{ textDecoration: "none" }}
    >
      <span
        className={
          category === singleCategory.value
            ? style.product_bar_item_active
            : style.product_bar_item
        }
      >
        {singleCategory.label}
      </span>
    </Link>
  ));

  return (
    <div className="container">
      <div className={style.product_bar}>
        <div className="flex-col-xl-10 flex-col-lg-10 flex-col-md-11 flex-col-sm-11 text-left">
          <div className={style.product_bar_item_container}>
            {prouductBarCategories}
          </div>
        </div>

        {/* below codes need optimisation asap */}

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
