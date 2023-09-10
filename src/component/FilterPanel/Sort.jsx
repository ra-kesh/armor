import style from "./FilterPanel.module.css";
import useLinkState from "../../hooks/useLinkState";

export const Sort = () => {
  const { sortBy, updateQueryParam } = useLinkState();

  return (
    <>
      <span className={style.filter_heading}>Sort By Price</span>
      <label htmlFor="low-to-high">
        <input
          type="radio"
          name="sort"
          id="low-to-high"
          onChange={() => updateQueryParam("sort_by", "low_to_high")}
          checked={sortBy === "low_to_high"}
        />
        low to high
      </label>
      <label htmlFor="high-to-low">
        <input
          type="radio"
          name="sort"
          id="high-to-low"
          onChange={() => updateQueryParam("sort_by", "high_to_low")}
          checked={sortBy === "high_to_low"}
        />
        high to low
      </label>
      <label htmlFor="reset">
        <input
          type="radio"
          name="sort"
          id="reset"
          onChange={() => updateQueryParam("sort_by", "default")}
          checked={sortBy === "default"}
        />
        default
      </label>
    </>
  );
};
