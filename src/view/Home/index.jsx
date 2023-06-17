import React from "react";
import { Navbar, Hero } from "../../component";
import { useProduct, useUserData } from "../../hooks";
// import HomePageLoader from "../component/Skelletons/HomePageLoader";

export const Home = () => {
  const { dataloading } = useUserData();
  const { loading } = useProduct();
  return (
    <>
      <Navbar />
      {!loading && !dataloading && (
        <>
          <Hero />
        </>
      )}
    </>
  );
};
