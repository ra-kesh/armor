import React, { useState } from "react";
import { Navbar } from "../Nav/NavBar";
import Footer from "../Footer";
import { useProduct, useUserData } from "../../hooks";
import { useRouteChangeEffect } from "../../hooks/useRouteChangeEffect";

const Layout = ({ children }) => {
  const { dataloading } = useUserData();
  const { loading } = useProduct();
  const [routeChanged, setRouteChanged] = useState(false);

  useRouteChangeEffect(setRouteChanged);

  return (
    <>
      <Navbar isLoading={dataloading || loading || routeChanged} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
