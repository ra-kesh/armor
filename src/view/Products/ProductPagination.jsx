import { useProduct } from "../../hooks";

export const ProductPagination = () => {
  const { page, totalPages, productDispatch, isPreviousData } = useProduct();

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== page
    ) {
      productDispatch({ type: "CHANGE PRODUCT PAGE", payload: selectedPage });
    }
  };

  return (
    <div className="container flex-row center-vertically gap-1 h-6">
      <button
        className="button-outline-dark"
        onClick={() => selectPageHandler(page - 1)}
        disabled={isPreviousData || page === 1}
      >
        Previous
      </button>

      {[...Array(totalPages)].map((_, index) => {
        return (
          <button
            className="button-outline-dark"
            key={index}
            onClick={() => selectPageHandler(index + 1)}
          >
            {index + 1}
          </button>
        );
      })}

      <button
        className="button-outline-dark"
        onClick={() => selectPageHandler(page + 1)}
        disabled={isPreviousData || page === totalPages}
      >
        Next
      </button>
    </div>
  );
};
