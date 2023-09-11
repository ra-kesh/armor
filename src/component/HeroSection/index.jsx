import React from "react";
import Carousel from "../Caroursel/Carousel.component";

export const Hero = () => {
  return (
    <div>
      <section className="hero_section">
        <div className="container-fluid">
          <Carousel images={images} />
        </div>
      </section>
    </div>
  );
};

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
