import React from "react";
import "./Organic.css";
const Organic = () => {
  return (
    <div className="flex justify-center ">
      <div className="main-grid bg-white p-15 flex flex-col gap-5 absolute top-175">
        {/* Top row → 3 equal images */}
        <div className="three-img grid grid-cols-3 gap-4 ">
          <div className="img-box relative overflow-hidden">
            {/* image */}
            <img
              className="w-full block"
              src="https://htmldemo.net/fulo/fulo/assets/img/category/1.webp"
              alt=""
            />

            {/* line over image */}
            <div className="white-line absolute top-20 left-0 w-[500px] h-[100px] rotate-40"></div>
          </div>
          <div className="img-box relative overflow-hidden">
            {/* image */}
            <img
              className="w-full block"
              src="https://htmldemo.net/fulo/fulo/assets/img/category/1.webp"
              alt=""
            />

            {/* line over image */}
            <div className="white-line absolute top-20 left-0 w-[500px] h-[100px] rotate-40"></div>
          </div>
          <div className="img-box relative overflow-hidden">
            {/* image */}
            <img
              className="w-full block last-img"
              src="https://htmldemo.net/fulo/fulo/assets/img/category/1.webp"
              alt=""
            />

            {/* line over image */}
            <div className="white-line absolute top-20 left-0 w-[500px] h-[100px] rotate-40"></div>
          </div>
        </div>

        {/* Bottom row → 2 equal images */}
        <div className="two-img grid grid-cols-2 gap-4">
          <div className="img-box relative overflow-hidden">
            <img
              className="w-full"
              src="https://htmldemo.net/fulo/fulo/assets/img/category/13.webp"
              alt=""
            />
            <div className="white-line absolute top-20 left-0 w-[700px] h-[100px] rotate-40"></div>
          </div>

          <div className="img-box relative overflow-hidden">
            <img
              className="w-full"
              src="https://htmldemo.net/fulo/fulo/assets/img/category/13.webp"
              alt=""
            />
            <div className="white-line absolute top-20 left-0 w-[700px] h-[100px] rotate-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organic;
