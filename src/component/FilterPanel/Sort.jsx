import { useControl } from "../../hooks";
import CloseIcon from "@material-ui/icons/Close";
import style from "./FilterPanel.module.css";

export const Sort = () => {
  const { sortBy, sortHighToLow, sortLowToHigh, resetSort } = useControl();

  return (
    <>
      <span className={style.filter_heading}>Sort By Price</span>
      <label htmlFor="low-to-high">
        <input
          type="radio"
          name="sort"
          id="low-to-high"
          onChange={sortLowToHigh}
          checked={sortBy === "LOW_TO_HIGH"}
        />
        Price low to high
      </label>
      <label htmlFor="high-to-low">
        <input
          type="radio"
          name="sort"
          id="high-to-low"
          onChange={sortHighToLow}
          checked={sortBy === "HIGH_TO_LOW"}
        />
        Price high to low
      </label>
      <div
        onClick={resetSort}
        className="pointer underline center-vertically m-top justify-end"
      >
        <CloseIcon fontSize="small" />
        <span>reset</span>
      </div>
    </>
  );
};
