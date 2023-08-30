import React from "react";
import withLayout from "../../utils/withLayout";

const Loader = () => {
  return (
    <div className="center-vertically min-h-100">
      <h4>Loading...</h4>
    </div>
  );
};

const FallBack = () => <Loader />;

export default withLayout(FallBack);
