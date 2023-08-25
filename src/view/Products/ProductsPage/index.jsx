import { useState } from "react";
import { useProduct, useControl } from "../../../hooks";
import { FilterPanel, Navbar } from "../../../component";
import { ProductBar } from "../ProductBar";
import { ProductCard } from "../ProductCard";
import { useLocation } from "react-router-dom";

const Products = () => {
  const {
    currentPage,
    totalPages,
    productList,
    getSortedProductList,
    getFilteredProductList,
    getCategorizedProductList,
    productDispatch,
  } = useProduct();

  const { sortBy, otherFilters, filterByCategory } = useControl();

  const location = useLocation();
  const path = location.pathname + location.search;

  const categorizedProductList = getCategorizedProductList(
    productList,
    filterByCategory
  );

  const sortedProductList = getSortedProductList(
    categorizedProductList,
    sortBy
  );

  const filteredProductList = getFilteredProductList(
    sortedProductList,
    otherFilters
  );

  const [showFilterModal, setShowFilterModal] = useState(false);

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
    <>
      <Navbar />
      <ProductBar
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
        filterByCategory={filterByCategory}
      />
      {showFilterModal && (
        <div className="container">
          <FilterPanel />
        </div>
      )}
      <div className="container">
        <div className="flex-row product-grid">
          {filteredProductList?.map((item) => (
            <div className="flex-col-sm-6 flex-col-lg-4" key={item._id}>
              <ProductCard item={item} path={path} />
            </div>
          ))}
        </div>
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

          <button onClick={() => selectPageHandler(currentPage + 1)}>
            next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
