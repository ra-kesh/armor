import { useState } from "react";
import { useProduct, useControl } from "../../../hooks";
import { FilterPanel, Navbar } from "../../../component";
import { ProductBar } from "../ProductBar";
import { ProductCard } from "../ProductCard";
import { useLocation } from "react-router-dom";
import { ProductPagination } from "../ProductPagination";

const Products = () => {
  const { productList, getSortedProductList, getFilteredProductList } =
    useProduct();

  const { sortBy, otherFilters } = useControl();

  const location = useLocation();
  const path = location.pathname + location.search;

  const sortedProductList = getSortedProductList(productList, sortBy);

  const filteredProductList = getFilteredProductList(
    sortedProductList,
    otherFilters
  );

  const [showFilterModal, setShowFilterModal] = useState(false);

  return (
    <>
      <Navbar />
      <ProductBar
        showFilterModal={showFilterModal}
        setShowFilterModal={setShowFilterModal}
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
        <ProductPagination />
      </div>
    </>
  );
};

export default Products;
