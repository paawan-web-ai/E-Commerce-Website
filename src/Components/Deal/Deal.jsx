import React from "react";
import "./Deal.css";
const Deal = () => {
  return (
    <div className="deal-main w-[28rem] bg-white shadow-lg rounded-xl overflow-hidden space-y-5 h-[30rem]">

      {/* Header */}
      <div className="bg-green-600 text-white text-2xl font-semibold flex justify-center items-center h-20">
        Deal Of The Week
      </div>

      {/* Content */}
      <div className="bg-gray-50 p-6">

        {/* Price Section */}
        <div className="text-center">
          <p className="text-3xl font-bold text-gray-900">
            <span className="text-base line-through text-gray-400 font-normal mr-2">
              $65.30
            </span>
            $59.42
            <span className="text-xs font-bold bg-red-600 text-white px-2 py-1 rounded ml-2">
              -9%
            </span>
          </p>
        </div>

        {/* Product Info */}
        <div className="mt-6 text-center">
          <p className="font-semibold text-lg">
            Sante Granola With Chocolate
          </p>

          <div className="flex justify-center mt-4 text-amber-400 text-xl">
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
          </div>
        </div>

        {/* Description */}
        <p className="mt-6 text-sm text-gray-600 leading-relaxed text-center">
          The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention to a range fashion
        </p>

        {/* Stock */}
        <p className="mt-4 text-center text-sm font-medium text-green-700">
          Availability: 300 In Stock
        </p>

      </div>
    </div>

  );
};

export default Deal;
