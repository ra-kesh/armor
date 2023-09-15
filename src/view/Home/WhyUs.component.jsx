import React from "react";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";

const WhyUs = () => {
  return (
    <div>
      <div className="center-vertically h-12">
        <h3>Why Us ?</h3>
      </div>
      <div className="flex-row">
        <div className="flex-col-sm-6 flex-col-lg-4">
          <div className="center-vertically">
            <LocalShippingOutlinedIcon fontSize="large" />
          </div>
          <h4 className="text-center">Free Shipping</h4>
          <p className="text-center text-mute">
            free shipping across pan india on all orders
          </p>
        </div>
        <div className="flex-col-sm-6 flex-col-lg-4">
          <div className="center-vertically">
            <VerifiedUserOutlinedIcon fontSize="large" />
          </div>
          <h4 className="text-center">Genuine Prouducts</h4>
          <p className="text-center text-mute">
            sole distributors in india for all brands present
          </p>
        </div>
        <div className="flex-col-sm-6 flex-col-lg-4">
          <div className="center-vertically">
            <ThumbUpOutlinedIcon fontSize="large" />
          </div>
          <h4 className="text-center">Warranty</h4>
          <p className="text-center text-mute">
            no questions asked refund within warranty period
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
