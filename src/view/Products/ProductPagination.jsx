import { Link } from "react-router-dom";
import { useProduct } from "../../hooks";
import useLinkState from "../../hooks/useLinkState";

export const ProductPagination = () => {
  const { totalPages, isPreviousData } = useProduct();
  const { page, updateQueryParam } = useLinkState();

  return (
    <div className="container flex-row center-vertically gap-1 h-8 ">
      <Link to={updateQueryParam("page", page - 1)}>
        <button
          className="button-outline-dark"
          disabled={isPreviousData || page === 1}
        >
          Previous
        </button>
      </Link>

      {/* styling issue active buttons */}

      {[...Array(totalPages)].map((_, index) => {
        return (
          <Link to={updateQueryParam("page", index + 1)} key={index}>
            {" "}
            <button className="button-outline-dark">{index + 1}</button>
          </Link>
        );
      })}

      <Link to={updateQueryParam("page", page + 1)}>
        <button
          className="button-outline-dark"
          disabled={isPreviousData || page === totalPages}
        >
          Next
        </button>
      </Link>
    </div>
  );
};
