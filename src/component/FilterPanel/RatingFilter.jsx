import React from "react";
import style from "./FilterPanel.module.css";
import Rating from "@mui/material/Rating";
import useLinkState from "../../hooks/useLinkState";

const RatingFilter = () => {
  const { updateQueryParam, filters } = useLinkState();

  console.log(filters);

  return (
    <>
      <span className={style.filter_heading}>Filter by Ratings</span>
      <label htmlFor="Ratings Above 4" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 4"
          onChange={() =>
            updateQueryParam("filter", {
              ratings_above_four: !filters.ratingsAboveFour,
            })
          }
          checked={filters.ratingsAboveFour}
        />
        <Rating value={4} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
      <label htmlFor="Ratings Above 3" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 3"
          onChange={() =>
            updateQueryParam("filter", {
              ratings_above_three: !filters.ratingsAboveThree,
            })
          }
          checked={filters.ratingsAboveThree}
        />
        <Rating value={3} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
      <label htmlFor="Ratings Above 2" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 2"
          onChange={() =>
            updateQueryParam("filter", {
              ratings_above_two: !filters.ratingsAboveTwo,
            })
          }
          checked={filters.ratingsAboveTwo}
        />
        <Rating value={2} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
      <label htmlFor="Ratings Above 1" className={style.rating}>
        <input
          type="checkbox"
          name="filter"
          id="Ratings Above 1"
          onChange={() =>
            updateQueryParam("filter", {
              ratings_above_one: !filters.ratingsAboveOne,
            })
          }
          checked={filters.ratingsAboveOne}
        />
        <Rating value={1} readOnly style={{ marginLeft: ".5rem" }} />
      </label>
    </>
  );
};

export default RatingFilter;
