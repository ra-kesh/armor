import { useProduct } from "../../hooks";

export const ProductPagination = () => {
  const { currentPage, totalPages, productDispatch } = useProduct();

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= totalPages &&
      selectedPage !== currentPage
    ) {
      productDispatch({ type: "CHANGE PRODUCT PAGE", payload: selectedPage });
    }
  };
  return (
    <div className="container flex-row center-vertically">
      <button onClick={() => selectPageHandler(currentPage - 1)}>
        previous
      </button>

      {[...Array(totalPages)].map((item, index) => {
        return (
          <button key={index} onClick={() => selectPageHandler(index + 1)}>
            {index + 1}
          </button>
        );
      })}

      <button onClick={() => selectPageHandler(currentPage + 1)}>next</button>
    </div>
  );
};
