import React from "react";
import "./Freeship.css";
const Freeship = () => {
  return (
    <div className="bg-green-700 text-white text-xs flex justify-center">
      <div className="free-ship-line flex justify-between w-[80%] py-2 h-20">
        <div>
          <p>FREE SHIPPING FOR ALL ORDERS OF $200</p>
        </div>
        <div className="freeship-icons flex gap-10">
          <p className="usd">USD</p>
          <p className="english">ENGLISH</p>
          <p className="compare">MY COMPARE</p>
          <p className="newletter">NEWSLETTER</p>
        </div>
      </div>
    </div>
  );
};

export default Freeship;
