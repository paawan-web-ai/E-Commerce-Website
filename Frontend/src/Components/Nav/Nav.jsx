import React, { useState } from "react";
import "./Nav.css";
import { Sling as Hamburger } from "hamburger-react";
import { Link } from "react-router-dom";
const Nav = ({ cart }) => {
  const [isOpen, setOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
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
              <div className="flex gap-8">
                <div>
                  <div className="mb-3 text-md">
                    <h1>Shop Layouts</h1>
                  </div>

                  <Link to="/shop/3-column" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Shop 3 Column
                  </Link>

                  <Link to="/shop/4-column" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Shop 4 Column
                  </Link>

                  <Link to="/shop/left-sidebar" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Shop Left Sidebar
                  </Link>

                  <Link to="/shop/right-sidebar" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Shop Right Sidebar
                  </Link>

                  <Link to="/shop/no-sidebar" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Shop No Sidebar
                  </Link>
                </div>
                <div>
                  <div className="mb-3 text-md">
                    <h1>Shop Pages</h1>
                  </div>
                  <Link to="/cart" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Cart Page
                  </Link>

                  <Link to="/checkout" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Checkout
                  </Link>

                  <Link to="/account" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    My Account
                  </Link>

                  <Link to="/wishlist" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Wishlist
                  </Link>

                  <Link to="/compare" className="block px-2 py-2 text-sm hover:bg-gray-100">
                    Compare
                  </Link>
                </div>
                <div>
                  <div className="mb-3 text-md">
                    <h1>Product Types</h1>
                  </div>
                  <a href="#" className="block px-2 py-2 text-sm w-32 hover:bg-gray-100">Product Details</a>
                  <a href="#" className="block px-2 py-2 text-sm w-32 hover:bg-gray-100">Product Variable</a>
                  <a href="#" className="block px-2 py-2 text-sm w-32 hover:bg-gray-100">Product Grouped</a>
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
          <Link
            to="/login"
            className="login flex items-center gap-2 hover:text-green-500 transition-all duration-300 ease-in-out"
          >
            <i className="ri-user-3-line text-2xl"></i>
            <p>Login</p>
          </Link>
          <div className="search hover:text-green-500 transition-all duration-300 ease-in-out">
            <i className="ri-search-line text-2xl"></i>
          </div>
          <div className="heart relative hover:text-green-500 transition-all duration-300 ease-in-out">
            <i className="ri-heart-line text-2xl"></i>
            <div className="navicon2 h-5 w-5 rounded-full bg-green-950 absolute top-4 left-3 text-center text-sm font-bold text-white">
              1
            </div>
          </div>
          <div
            onClick={() => setShowCart(!showCart)}
            className="cart relative hover:text-green-500 transition-all duration-300 ease-in-out">
            <i className=" ri-shopping-bag-line text-2xl"></i>
            <div className="navicon2 h-5 w-5 rounded-full bg-green-950 absolute top-4 left-3 text-center text-sm font-bold text-white">
              {cart.length}
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
      {showCart && (
        <div className="absolute right-20 top-30 w-80 bg-white text-black shadow-lg rounded-lg p-4 z-50">

          <h2 className="font-bold text-lg mb-3">Cart Items</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between border-b py-2">
                <span>{item.name}</span>
                <span>₹{item.price}</span>
              </div>
            ))
          )}

        </div>
      )}
    </div>
  );
};

export default Nav;
