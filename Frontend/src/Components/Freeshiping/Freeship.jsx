import React from "react";
import "./Freeship.css";
const Freeship = () => {
  return (
    <div className="bg-green-700 text-white text-xs flex justify-center items-start relative z-10">
      <div className="free-ship-line flex justify-between w-[85%] py-2 h-20 ">
        <div>
          <p>FREE SHIPPING FOR ALL ORDERS OF $200</p>
        </div>
        <div className="freeship-icons flex items-start gap-5 ">
          <div className="flex items-center gap-1 pr-5 border-r border-white/30 h-4 leading-none cursor-pointer">
            <span>USD $</span>
            <i className="ri-arrow-down-s-line text-sm"></i>
          </div>

          <div className="flex items-center gap-2 pr-5 border-r border-white/30 h-4 leading-none cursor-pointer">
            <img src="src/assets/img/United_States_of_America_Large_Flag.png" alt="" className="w-4 h-3" />
            <span>ENGLISH</span>
            <i className="ri-arrow-down-s-line text-sm"></i>
          </div>

          <div className="flex items-center gap-2 pr-5 border-r border-white/30 h-4 leading-none cursor-pointer">
            <i className="ri-stack-line text-sm"></i>
            <span>MY COMPARE (3)</span>
          </div>

          <div className="flex items-center gap-2 px-2 h-4 leading-none cursor-pointer">
            <i className="ri-mail-line text-sm"></i>
            <span>NEWSLETTER</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freeship;
