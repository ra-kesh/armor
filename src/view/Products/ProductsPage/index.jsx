import { useState } from "react";
import { useProduct } from "../../../hooks";
import { FilterPanel } from "../../../component";
import { ProductBar } from "../ProductBar";
import { ProductCard } from "../ProductCard";
import { ProductPagination } from "../ProductPagination";
import withLayout from "../../../utils/withLayout";

const Products = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const { filteredProductList, isProductsLoading } = useProduct();

  if (isProductsLoading) {
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
