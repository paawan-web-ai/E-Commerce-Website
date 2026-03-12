import React from "react";
import "./Service.css";
const Service = () => {
  return (
    <div>
      <div className="main-service w-[100%] flex justify-center gap-15 flex-wrap mt-[40%] ">
        <div className="service-box flex items-center gap-5 ">
          <i className="ri-send-plane-fill text-green-700 text-6xl"></i>
          <div>
            <p className="text-2xl font-bold">Free Shipping</p>
            <p className="text-sm">On all orders over $75.00</p>
          </div>
        </div>
        <div className=" service-box flex items-center gap-5 ">
          <i className="ri-loop-left-line text-green-700 text-6xl"></i>
          <div>
            <p className="text-2xl font-bold">Easy 30 Days Returns</p>
            <p className="text-sm">30 days money back</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-5 ">
          <i className="ri-bank-card-2-line text-green-700 text-6xl"></i>
          <div>
            <p className="text-2xl font-bold">100% Payment Secure</p>
            <p className="text-sm">PayPal / MasterCard / Visa</p>
          </div>
        </div>
        <div className="service-box flex items-center gap-5 ">
          <i className="ri-customer-service-2-line text-green-700 text-6xl"></i>
          <div>
            <p className="text-2xl font-bold">24/7 Support</p>
            <p className="text-sm">We will be at your service</p>
          </div>
        </div>
      </div>
      <div className="px-8 pb-15 border-b-2 border-gray-300 mb-5 w-[90%] mx-auto"></div>
    </div>
  );
};

export default Service;
