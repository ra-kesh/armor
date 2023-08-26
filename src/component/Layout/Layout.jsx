import React from "react";
import { Navbar } from "../Nav/NavBar";
import Footer from "../Footer";
import { useProduct, useUserData } from "../../hooks";

const Layout = ({ children }) => {
  const { dataloading } = useUserData();
  const { loading } = useProduct();

  return (
    <>
      <Navbar isLoading={dataloading || loading} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
