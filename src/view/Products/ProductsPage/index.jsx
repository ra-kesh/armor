import { useState } from "react";
import { useProduct, useControl } from "../../../hooks";
import { FilterPanel } from "../../../component";
import { ProductBar } from "../ProductBar";
import { ProductCard } from "../ProductCard";
import { ProductPagination } from "../ProductPagination";
import withLayout from "../../../utils/withLayout";
import useLinkState from "../../../hooks/useLinkState";

const Products = () => {
  const { productList, getSortedProductList, getFilteredProductList } =
    useProduct();

  const { otherFilters } = useControl();

  const { sortBy } = useLinkState();

  const sortedProductList = getSortedProductList(productList, sortBy);

  const filteredProductList = getFilteredProductList(
    sortedProductList,
    otherFilters
  );

  const [showFilterModal, setShowFilterModal] = useState(false);

  if (productList.length === 0) {
    return (
      <div className="center-vertically min-h-100">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
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
        <div className="flex-row border-bottom-light">
          {filteredProductList?.map((item) => (
            <div className="flex-col-sm-6 flex-col-lg-4" key={item._id}>
              <ProductCard item={item} />
            </div>
          ))}
        </div>
      </div>
      <ProductPagination />
    </>
  );
};

export default withLayout(Products);
