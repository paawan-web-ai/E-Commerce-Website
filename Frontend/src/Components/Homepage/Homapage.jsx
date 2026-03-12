import React from "react";
import "./Homepage.css";
const Homapage = () => {
  return (
    <div className="bg-main relative bottom-5">
      <div className="bg-image flex justify-center items-center flex-col gap-10">
        <h1 className="text-8xl font-bold">Organic Farm</h1>
        <p className="text-4xl opacity-80 font-semibold">
          get fresh foods from our farm to your table
        </p>
        <button className="bg-green-700 py-3 px-5 rounded-3xl font-semibold text-white cursor-pointer">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Homapage;
