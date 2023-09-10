import React, { useState } from "react";
import { Navbar } from "../Nav/NavBar";
import Footer from "../Footer";
import { useProduct } from "../../hooks";
import { useRouteChangeEffect } from "../../hooks/useRouteChangeEffect";

const Layout = ({ children }) => {
  const { isProductsLoading } = useProduct();
  const [routeChanged, setRouteChanged] = useState(false);

  useRouteChangeEffect(setRouteChanged);

  return (
    <>
      <Navbar isLoading={isProductsLoading || routeChanged} />
      <div className="m-y-two">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
