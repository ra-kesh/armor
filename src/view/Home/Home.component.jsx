import React from "react";
import { Navbar, Hero } from "../../component";
import { useProduct, useUserData } from "../../hooks";

export const Home = () => {
  const { dataloading } = useUserData();
  const { isProductsLoading } = useProduct();
  return (
    <>
      <Navbar />
      {!isProductsLoading && !dataloading && (
        <>
          <Hero />
        </>
      )}
    </>
  );
};
