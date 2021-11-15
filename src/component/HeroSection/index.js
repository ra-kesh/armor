import React from "react";

export const Hero = () => {
  return (
    <div>
      <section className="hero_section">
        <div className="container-fluid">
          <div className="flex-row">
            <div className="flex-col-xl-5 flex-col-md-6 flex-col-lg-6">
              <div className="single_product">
                <div className="single_product_image">
                  <img class="img-fluid" src="hero/09.jpg" alt="" />
                </div>
                <div className="single_product_details">
                  <h4>mdmddvdvdvmldvmdl</h4>
                </div>
              </div>
            </div>
            <div className="flex-col-xl-4 flex-col-md-6 flex-col-lg-6">
              <div className="single_product">
                <div className="single_product_image">
                  <img class="img-fluid" src="hero/13.jpg" alt="" />
                </div>
                <div className="single_product_details_two">
                  <h4>mdmddvdvdvmldvmdl</h4>
                </div>
              </div>
            </div>
            <div className="flex-col-xl-3 flex-col-lg-12">
              <div className="flex-row">
                <div className="flex-col-xl-12 flex-col-12 flex-col-md-6 flex-col-lg-6">
                  <div className="single_product">
                    <div className="single_product_image">
                      <img class="img-responsive" src="hero/04.jpg" alt="" />
                    </div>
                    <div className="single_product_details_three">
                      <h4>mdmddvdvdvmldvmdl</h4>
                    </div>
                  </div>
                </div>
                <div className="flex-col-xl-12 flex-col-12 flex-col-md-6 flex-col-lg-6">
                  <div className="single_product">
                    <div className="single_product_image">
                      <img class="img-responsive" src="hero/01.jpg" alt="" />
                    </div>
                    <div className="single_product_details_three">
                      <h4>mdmddvdvdvmldvmdl</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
