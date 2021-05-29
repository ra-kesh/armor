import { useState } from "react";
import { useProduct, useControl } from "../../hooks";
import { Filter, Sort, ProductCard, Navbar } from "../../component";
import FilterListIcon from "@material-ui/icons/FilterList";
import CloseIcon from "@material-ui/icons/Close";
import { useLocation } from "react-router-dom";

export const Products = () => {
  const {
    productList,
    getSortedProductList,
    getFilteredProductList,
    getCategorizedProductList,
  } = useProduct();

  const {
    sortBy,
    filters,
    filterByCategory,
    filterGloves,
    filterHelmets,
    filterJackets,
    filterShoes,
    showAll,
  } = useControl();

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
    filters
  );

  const [showFilterModal, setShowFilterModal] = useState(false);

  function ProductBar() {
    return (
      <div className="container">
        <div className="flex-row center-vertically product-bar">
          <div className="flex-col-lg-10 text-left">
            <span className="product-bar-item" onClick={showAll}>
              All Products
            </span>
            <span className="product-bar-item" onClick={filterJackets}>
              Jackets
            </span>
            <span className="product-bar-item" onClick={filterHelmets}>
              Helmets
            </span>
            <span className="product-bar-item" onClick={filterGloves}>
              Gloves
            </span>
            <span className="product-bar-item" onClick={filterShoes}>
              Shoes
            </span>
          </div>

          <div className="flex-col-lg-2">
            <div
              onClick={() =>
                setShowFilterModal((showFilterModal) => !showFilterModal)
              }
              className={showFilterModal ? "filter-btn-active" : "filter-btn"}
            >
              {showFilterModal ? (
                <CloseIcon fontSize="small" style={{ marginRight: ".5rem" }} />
              ) : (
                <FilterListIcon
                  fontSize="small"
                  style={{ marginRight: ".5rem" }}
                />
              )}
              <span>Sort & Filter </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function FilterPanel() {
    return (
      <div className="filter-panel flex-row trans-04">
        <div className="flex-col-lg-3">
          <div className="container">
            <Filter />
          </div>
        </div>
        <div className="flex-col-lg-3">
          <div className="container">
            <Sort />
          </div>
        </div>
        {/* <div className="flex-col-lg-3">
                <div className="container">
                  <h3>price</h3>
                </div>
            </div> */}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <ProductBar />
      {showFilterModal && (
        <div className="container">
          <FilterPanel />
        </div>
      )}
      <div className="container">
        <div className="flex-row product-grid">
          {filteredProductList.map((item) => (
            <div className="flex-col-sm-6 flex-col-lg-4" key={item._id}>
              <ProductCard item={item} path={path} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
