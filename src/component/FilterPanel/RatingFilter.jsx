import React from "react";
import style from "./FilterPanel.module.css";
import { useControl } from "../../hooks";
import Rating from "@mui/material/Rating";

const RatingFilter = () => {
  const {
    otherFilters,
    showRatingsAboveFour,
    showRatingsAboveThree,
    showRatingsAboveTwo,
    showRatingsAboveOne,
  } = useControl();
  return (
    <>
      <span className={style.filter_heading}>Filter by Ratings</span>
      <label htmlFor="Ratings Above 4" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 4"
          onChange={showRatingsAboveFour}
          checked={otherFilters.showOnlyRatingsAboveFour}
        />
        <Rating value={4} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
      <label htmlFor="Ratings Above 3" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 3"
          onChange={showRatingsAboveThree}
          checked={otherFilters.showOnlyRatingsAboveThree}
        />
        <Rating value={3} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
      <label htmlFor="Ratings Above 2" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 2"
          onChange={showRatingsAboveTwo}
          checked={otherFilters.showOnlyRatingsAboveTwo}
        />
        <Rating value={2} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
      <label htmlFor="Ratings Above 1" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 1"
          onChange={showRatingsAboveOne}
          checked={otherFilters.showOnlyRatingsAboveOne}
        />
        <Rating value={1} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
    </>
  );
};

export default RatingFilter;
