import { useProduct } from "../../hooks";

export const ProductPagination = () => {
  const { page, totalPages, productDispatch } = useProduct();

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
    <div className="container flex-row center-vertically">
      <button onClick={() => selectPageHandler(page - 1)}>previous</button>

      {[...Array(totalPages)].map((_, index) => {
        return (
          <button key={index} onClick={() => selectPageHandler(index + 1)}>
            {index + 1}
          </button>
        );
      })}

      <button onClick={() => selectPageHandler(page + 1)}>next</button>
    </div>
  );
};
