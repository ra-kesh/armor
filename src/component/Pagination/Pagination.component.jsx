import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({
  page,
  totalPages,
  isPreviousData,
  updateQueryParam,
}) => {
  const previousButton = (
    <button
      className="button-outline-dark"
      disabled={isPreviousData || page === 1}
    >
      Previous
    </button>
  );

  const pageNumbers = [...Array(totalPages)].map((_, index) => {
    return (
      <Link to={updateQueryParam("page", index + 1)} key={index}>
        {" "}
        <button
          className={
            index + 1 === page
              ? "button-outline-dark-active"
              : "button-outline-dark"
          }
        >
          {index + 1}
        </button>
      </Link>
    );
  });

  const nextButton = (
    <button
      className="button-outline-dark"
      disabled={isPreviousData || page === totalPages}
    >
      Next
    </button>
  );

  return (
    <div className="container flex-row center-vertically gap-1 h-8 ">
      <Link to={updateQueryParam("page", page - 1)}>{previousButton}</Link>

      {pageNumbers}

      <Link to={updateQueryParam("page", page + 1)}>{nextButton}</Link>
    </div>
  );
};

export default Pagination;
