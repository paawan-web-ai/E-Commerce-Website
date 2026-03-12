import React, { useState, useEffect } from "react";
import "./Cardtitle.css";
import axios from "axios"



const Cardstitle = ({ addToCart }) => {



  const [posts, setposts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/api/posts")
      .then((res) => {
        // console.log(res.data)
        setposts(res.data.post)

      })
  }, [])



  const [activetab, setactivetab] = useState("featured");

  const filterProducts = (posts || []).filter(
    (item) => item.category === activetab
  );
  return (
    <div className="mt-10">
      <div className="tabs cursor-pointer flex flex-wrap justify-center gap-4 sm:gap-10 md:gap-20 mb-5 text-xl ">
        <h2
          onClick={() => {
            setactivetab("featured");
          }}
        >
          Featured Products
        </h2>
        <h2
          onClick={() => {
            setactivetab("new");
          }}
        >
          New Arrival
        </h2>
        <h2
          onClick={() => {
            setactivetab("best");
          }}
        >
          Best Sellers
        </h2>
      </div>
      <hr className="w-[60%] mx-auto" />
      <div className="flex flex-wrap mt-10 justify-center gap-5 max-w-5xl px-4 mx-auto">
        {filterProducts.map((item) => {
          return (
            <div className="card  " key={item._id || item.id}>
              <div className=" w-64 border border-transparent hover:border-green-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center bg-white h-85 space-y-1 overflow-hidden relative group cursor-pointer ">
                <div className="w-full  overflow-hidden rounded-lg mb-3 flex justify-center ">
                  <img
                    className="w-50 h-50 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>

                <div className=" flex gap-2 text-3xl text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-pointer">
                  <div
                    onClick={() => addToCart(item)}
                    className="bg-green-600 hover:bg-green-800 p-2 border rounded-full w-14 flex items-center justify-center"
                  >
                    <i className="ri-shopping-bag-4-line"></i>
                  </div>
                  <div className="bg-green-600 hover:bg-green-800 p-2 border rounded-[50%] w-14">
                    <i className="ri-heart-line"></i>
                  </div>
                </div>

                <h3 className="text-lg font-semibold">{item.title}</h3>

                <p className="text-green-600 font-bold text-xl">
                  ₹{item.price}
                </p>

                <p>{item.description}</p>

                <div className="text-yellow-400">
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                  <i className="ri-star-line"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cardstitle;
