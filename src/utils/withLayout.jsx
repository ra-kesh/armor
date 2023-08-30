import React from "react";
import Layout from "../component/Layout/Layout";

const withLayout = (Component) => {
  return (props) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
};

export default withLayout;
