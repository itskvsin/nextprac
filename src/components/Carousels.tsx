import React from "react";
import Carousel from "@/components/Carousel";

const Carousels = () => {
  return (
    <div>
      <div className="h-screen flex items-center justify-center w-screen">
        <Carousel
          images={["/images/img1.png", "/images/img2.png", "/images/img3.png"]}
          speed={10} // slower or faster depending on your need
          imageWidth={400}
        />
      </div>
    </div>
  );
};

export default Carousels;
