import React from "react";
import withLayout from "../../utils/withLayout";
import Carousel from "../../component/Caroursel/Carousel.component";

const Home = () => {
  return (
    <>
      <section className="container">
        <Carousel images={images} />
      </section>
    </>
  );
};

export default withLayout(Home);

const images = [
  "/hero/image_1_v1.webp",
  "/hero/image_2_v1.webp",
  "/hero/image_3_v1.webp",
  "/hero/image_4_v1.webp",
  "/hero/image_5_v1.webp",
  "/hero/image_6_v1.webp",
  "/hero/image_7_v1.webp",
  "/hero/image_8_v1.webp",
];
