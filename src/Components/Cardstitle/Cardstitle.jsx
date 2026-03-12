import React, { useState } from "react";
import "./Cardtitle.css";

const products = [
  {
    id: 1,
    name: "Papaya",
    category: "featured",
    price: 55,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 2,
    name: "Avocado",
    category: "featured",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 3,
    name: "Avocado",
    category: "featured",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 4,
    name: "Avocado",
    category: "featured",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 5,
    name: "Avocado",
    category: "featured",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 6,
    name: "Avocado",
    category: "featured",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },

  {
    id: 7,
    name: "Kiwi",
    category: "new",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 8,
    name: "Kiwi",
    category: "new",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 9,
    name: "Kiwi",
    category: "new",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 10,
    name: "Kiwi",
    category: "new",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 11,
    name: "Kiwi",
    category: "new",
    price: 29,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 12,
    name: "Eggplant",
    category: "best",
    price: 41,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 13,
    name: "Apple",
    category: "new",
    price: 32,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 14,
    name: "Banana",
    category: "best",
    price: 21,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 15,
    name: "Banana",
    category: "best",
    price: 21,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 16,
    name: "Banana",
    category: "best",
    price: 21,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 17,
    name: "Banana",
    category: "best",
    price: 21,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
  {
    id: 18,
    name: "Banana",
    category: "best",
    price: 21,
    image: "https://htmldemo.net/fulo/fulo/assets/img/shop/details/s6.webp",
  },
];

const Cardstitle = ({ addToCart }) => {
  const [activetab, setactivetab] = useState("featured");

  const filterProducts = products.filter((item) => {
    return item.category === activetab;
  });
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
            <div className="card  " key={item.id}>
              <div className=" w-64 border border-transparent hover:border-green-500 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 text-center bg-white h-85 space-y-1 overflow-hidden relative group cursor-pointer ">
                <div className="w-full  overflow-hidden rounded-lg mb-3 flex justify-center ">
                  <img
                    className="w-50 h-50 object-cover"
                    src={item.image}
                    alt={item.name}
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

                <h3 className="text-lg font-semibold">{item.name}</h3>

                <p className="text-green-600 font-bold text-xl">
                  ₹{item.price}
                </p>

                <p>Fusce nec facilisi width 1 Granola</p>

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
