import React from "react";

const SalesBoxes = () => {
  return (
    <div>
      <div className="flex justify-center flex-wrap p-10 gap-5 mt-15 ">
        <div className="w-full  sm:w-[48%] md:w-[30%] lg:w-[30%]">
          <img
            className="w-full"
            src="https://htmldemo.net/fulo/fulo/assets/img/category/23.webp"
            alt=""
          />
        </div>
        <div className="w-full  sm:w-[48%] md:w-[30%] lg:w-[30%]">
          <img
            className="w-full"
            src="https://htmldemo.net/fulo/fulo/assets/img/category/24.webp"
            alt=""
          />
        </div>
        <div className="w-full  sm:w-[48%] md:w-[30%] lg:w-[30%]">
          <img
            className="w-full"
            src="https://htmldemo.net/fulo/fulo/assets/img/category/25.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SalesBoxes;
