import React, { useRef, useEffect } from "react";

import img1 from "../../assets/img/slider1.webp";
import img2 from "../../assets/img/slider2.webp";
import img3 from "../../assets/img/slider3.webp";
import img4 from "../../assets/img/slider4.webp";
import img5 from "../../assets/img/slider6.webp";
import img6 from "../../assets/img/slider5.webp";

const BrandSlider = () => {
  const sliderRef = useRef();

  useEffect(() => {
    const slider = sliderRef.current;

    const autoScroll = setInterval(() => {
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0;
      } else {
        slider.scrollBy({
          left: 1,
          behavior: "auto",
          Infinity,
        });
      }
    }, 20);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <div className="flex justify-center w-full mt-15 overflow-hidden">
      <div ref={sliderRef} className="flex gap-10 w-[900px] overflow-hidden">
        {/* FIRST SET */}
        <img src={img1} className="h-16 flex-shrink-0" />
        <img src={img2} className="h-16 flex-shrink-0" />
        <img src={img3} className="h-16 flex-shrink-0" />
        <img src={img4} className="h-16 flex-shrink-0" />
        <img src={img5} className="h-16 flex-shrink-0" />
        <img src={img6} className="h-16 flex-shrink-0" />

        {/* DUPLICATE SET FOR INFINITE LOOP */}
        <img src={img1} className="h-16 flex-shrink-0" />
        <img src={img2} className="h-16 flex-shrink-0" />
        <img src={img3} className="h-16 flex-shrink-0" />
        <img src={img4} className="h-16 flex-shrink-0" />
        <img src={img6} className="h-16 flex-shrink-0" />
      </div>
    </div>
  );
};

export default BrandSlider;
