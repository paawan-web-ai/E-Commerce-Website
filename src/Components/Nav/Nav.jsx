import React, { useState } from "react";
import "./Nav.css";
import { Sling as Hamburger } from "hamburger-react";
const Nav = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex justify-center pt-5 items-center ">
      <div className="nav-main absolute z-10 top-10 flex justify-between items-center h-20 px-10 py-4 w-[85%] bg-green-800 text-white">
        <div className="text-5xl font-bold">
          <h1>Fulo</h1>
        </div>
        <div className="nav-data flex gap-10 text-lg items-center ">
          <p className="hover:text-green-500 transition-all duration-300 ease-in-out">
            <a href="#">HOME</a>
          </p>


          <div className="relative group hover:text-green-500 transition-all duration-300 ease-in-out">

            <div className="flex items-center cursor-pointer">
              <a href="#">SHOP</a>
              <i className="text-2xl ri-arrow-drop-down-line"></i>
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-fit rounded p-5 ">
              <div className="flex gap-10">
                <div>
                  <div className="mb-5">
                    <h1>Shop Layouts</h1>
                  </div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a>
                </div>
                <div>
                  <div className="mb-5">
                    <h1>Shop Layouts</h1>
                  </div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a>
                </div>
                <div>
                  <div className="mb-5">
                    <h1>Shop Layouts</h1>
                  </div>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a>
                </div>
              </div>
            </div>

          </div>


          <div className="relative group hover:text-green-500 transition-all duration-300 ease-in-out">

            <div className="flex items-center cursor-pointer">
              <a href="#">PAGES</a>
              <i className="text-2xl ri-arrow-drop-down-line"></i>
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-40 rounded">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a>
            </div>

          </div>
          <div className="relative group hover:text-green-500 transition-all duration-300 ease-in-out">

            <div className="flex items-center cursor-pointer">
              <a href="#">BLOG</a>
              <i className="text-2xl ri-arrow-drop-down-line"></i>
            </div>
            <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-40 rounded">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Men</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Women</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Kids</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Accessories</a>
            </div>

          </div>
          <p className="hover:text-green-500 transition-all duration-300 ease-in-out">
            <a href="#">ABOUT US</a>
          </p>
          <p className="hover:text-green-500 transition-all duration-300 ease-in-out">
            <a href="#">CONTACT US</a>
          </p>
        </div>
        <div className="nav-icons flex gap-4 text-lg items-center">
          <div className="login flex items-center gap-2 hover:text-green-500 transition-all duration-300 ease-in-out">
            <i class="ri-user-3-line text-2xl"></i>
            <p>Login</p>
          </div>
          <div className="search hover:text-green-500 transition-all duration-300 ease-in-out">
            <i className="ri-search-line text-2xl"></i>
          </div>
          <div className="heart relative hover:text-green-500 transition-all duration-300 ease-in-out">
            <i class="ri-heart-line text-2xl"></i>
            <div className="navicon1 h-5 w-5 rounded-[50%] bg-green-950 absolute top-4 left-3 text-center text-sm font-bold text-white">
              1
            </div>
          </div>
          <div className="cart relative hover:text-green-500 transition-all duration-300 ease-in-out">
            <i class=" ri-shopping-bag-line text-2xl"></i>
            <div className="navicon2 h-5 w-5 rounded-[50%] bg-green-950 absolute top-4 left-3 text-center text-sm font-bold text-white">
              1
            </div>
          </div>
          <p className="amount">$91.10</p>
          {/* Hamburger */}
          <div className="hamburger">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={24}
              color="#fff"
            />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <a>HOME</a>
          <a>SHOP</a>
          <a>PAGES</a>
          <a>BLOG</a>
          <a>ABOUT US</a>
          <a>CONTACT US</a>
        </div>
      )}
    </div>
  );
};

export default Nav;
