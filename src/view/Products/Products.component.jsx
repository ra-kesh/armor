import { useState } from "react";
import { useProduct } from "../../hooks";
import { FilterPanel } from "../../component";
import { ProductBar } from "./ProductBar";
import { ProductCard } from "./ProductCard";
import withLayout from "../../utils/withLayout";
import Pagination from "../../component/Pagination/Pagination.component";
import useLinkState from "../../hooks/useLinkState";

const Products = () => {
  const [showFilterModal, setShowFilterModal] = useState(false);

  const { filteredProductList, isProductsLoading, totalPages, isPreviousData } =
    useProduct();

  const { page, updateQueryParam } = useLinkState();

  if (isProductsLoading) {
    return (
      <div className="center-vertically min-h-100">
        <h4>Loading...</h4>
      </div>
    );
  }

  const filteredProducts = filteredProductList.map((item) => (
    <div className="flex-col-sm-6 flex-col-lg-4" key={item._id}>
      <ProductCard item={item} />
    </div>
  ));

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
        <div className="flex-row border-bottom-light">{filteredProducts}</div>
      </div>

      <Pagination
        page={page}
        totalPages={totalPages}
        isPreviousData={isPreviousData}
        updateQueryParam={updateQueryParam}
      />
    </>
  );
};

export default withLayout(Products);
