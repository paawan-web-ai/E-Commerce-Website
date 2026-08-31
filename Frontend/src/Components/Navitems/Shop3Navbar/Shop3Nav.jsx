import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./Shop3Nav.css";

const Shop3Nav = () => {
  const [showdropdown, setShowDropdown] = useState(true);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const departments = [
    "Fresh Vegetables",
    "Fresh Fruits",
    "Dairy Products",
    "Bakery Products",
    "Beverages",
  ];

  const toggleDropdown = () => {
    setShowDropdown((previous) => !previous);
  };

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const handleDepartmentKeyDown = (event) => {
    if (event.key === "Escape") {
      closeDropdown();
    }
  };
  return (
    <div className="main-navbar">
      <nav className="shop3-nav-main w-full px-5 lg:px-50 ">
        {/* Main Container: Flex-wrap allows items to drop to next line */}
        <div className="flex flex-wrap lg:flex-nowrap justify-between items-center gap-y-5">
          {/* Logo - Always left (or top-left) */}
          <div className="shop3-heading text-4xl md:text-6xl  font-bold order-1">
            <h1>FULO</h1>
          </div>

          {/* Icons - Moved to order-2 to stay next to logo on smaller screens */}
          <div className="flex items-center gap-5 order-2 lg:order-3">
            <Link to="/wishlist" className="relative" aria-label="Wishlist">
              <i className="ri-heart-line text-3xl md:text-4xl"></i>
              <span className="absolute top-0 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                2
              </span>
            </Link>
            <Link to="/cart" className="relative" aria-label="Shopping cart">
              <i className="ri-shopping-bag-line text-3xl md:text-4xl"></i>
              <span className="absolute top-0 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                2
              </span>
            </Link>
            <button
              type="button"
              className="shop3-menu-toggle"
              onClick={() => setShowMobileMenu((previous) => !previous)}
              aria-label="Toggle menu"
              aria-expanded={showMobileMenu}
            >
              <i className="ri-menu-line"></i>
            </button>
          </div>

          {/* Wrapper for Search and Call */}
          <div className="shop3-items w-full lg:w-auto flex flex-col lg:flex-row gap-5 lg:gap-17 items-center order-3 lg:order-2">
            {/* Call Section: Hidden via CSS at 1352px as per your request */}
            <div className="shop3-call flex items-center gap-2">
              <div className="text-4xl text-green-600">
                <i className="ri-phone-line "></i>
              </div>
              <div>
                <p className="text-sm">need help?</p>
                <p className="text-xl font-semibold">+00 123456789</p>
              </div>
            </div>

            {/* Search Box: Becomes full width/centered at smaller sizes */}
            <div className="shop3-search flex items-center border w-full lg:w-fit px-5 md:px-10 py-1 rounded-4xl border-green-800">
              <input
                type="text"
                placeholder="Search..."
                className="outline-none p-2 text-lg w-full"
              />
              <i className="ri-search-line"></i>
            </div>
          </div>
        </div>
        <div className="mt-10 px-4 flex justify-between items-center second-nav">
          <div
            className="department-menu relative"
            onKeyDown={handleDepartmentKeyDown}
          >
            <button
              type="button"
              onClick={toggleDropdown}
              aria-expanded={showdropdown}
              aria-controls="department-list"
              className="flex gap-2 text-2xl font-bold bg-green-500 text-white py-4 px-6 rounded-t-3xl cursor-pointer items-center"
            >
              All Department
              <i
                className={`ri-arrow-down-s-line transition-transform ${showdropdown ? "rotate-180" : ""}`}
              ></i>
            </button>
            <div
              id="department-list"
              className={`department-dropdown absolute left-0 top-full w-64 border-2 border-green-500 rounded-b-2xl overflow-hidden bg-white z-50 transition-all duration-300 ease-in-out ${showdropdown ? "visible max-h-96 opacity-100" : "invisible max-h-0 opacity-0"}`}
            >
              <ul className="p-3 flex flex-col gap-1" role="menu">
                {departments.map((department) => (
                  <li key={department} role="menuitem">
                    <button
                      type="button"
                      onClick={closeDropdown}
                      className="w-full text-left border-b p-2 text-lg hover:bg-green-50 hover:text-green-600"
                    >
                      {department}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-10 justify-center items-center">
            <Link to="/" className="hover:text-green-600">
              HOME
            </Link>
            <div className="relative group hover:text-green-600 transition-all duration-300 ease-in-out">
              <Link to="/shop/3-column" className="flex items-center">
                SHOP <i className="ri-arrow-down-s-line"></i>
              </Link>
              <div className="absolute hidden group-hover:block bg-white shadow-lg top-full left-0 w-[35rem] rounded p-8 text-black space-y-8 z-50">
                <div className="flex gap-8">
                  <div>
                    <h2 className="mb-3 text-md">Shop Layouts</h2>
                    <Link
                      to="/shop/3-column"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Shop 3 Column
                    </Link>
                    <Link
                      to="/shop/4-column"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Shop 4 Column
                    </Link>
                    <Link
                      to="/shop/left-sidebar"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Shop Left Sidebar
                    </Link>
                    <Link
                      to="/shop/right-sidebar"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Shop Right Sidebar
                    </Link>
                    <Link
                      to="/shop/no-sidebar"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Shop No Sidebar
                    </Link>
                  </div>
                  <div>
                    <h2 className="mb-3 text-md">Shop Pages</h2>
                    <Link
                      to="/cart"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Cart Page
                    </Link>
                    <Link
                      to="/checkout"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Checkout
                    </Link>
                    <Link
                      to="/account"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      My Account
                    </Link>
                    <Link
                      to="/wishlist"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Wishlist
                    </Link>
                    <Link
                      to="/compare"
                      className="block px-2 py-2 text-sm hover:bg-gray-100"
                    >
                      Compare
                    </Link>
                  </div>
                  <div>
                    <h2 className="mb-3 text-md">Product Types</h2>
                    <a
                      href="#"
                      className="block px-2 py-2 text-sm w-32 hover:bg-gray-100"
                    >
                      Product Details
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 text-sm w-32 hover:bg-gray-100"
                    >
                      Product Variable
                    </a>
                    <a
                      href="#"
                      className="block px-2 py-2 text-sm w-32 hover:bg-gray-100"
                    >
                      Product Grouped
                    </a>
                  </div>
                </div>
                <div className="w-full h-50">
                  <img
                    className="w-full h-full object-cover object-center"
                    src="..\src\assets\img\vegetables.jpg"
                    alt="Fresh vegetables"
                  />
                </div>
              </div>
            </div>
            <p className="hover:text-green-600">
              PAGES <i className="ri-arrow-down-s-line"></i>
            </p>
            <p className="hover:text-green-600">
              BLOG <i className="ri-arrow-down-s-line"></i>
            </p>
            <p className="hover:text-green-600">
              ABOUT US <i className="ri-arrow-down-s-line"></i>
            </p>
            <p className="hover:text-green-600">
              CONTACT US <i className="ri-arrow-down-s-line"></i>
            </p>
          </div>
          <div>
            <Link to="/login" className="text-xl hover:text-green-600">
              <i className="text-xl ri-user-follow-line"></i> LOGIN
            </Link>
          </div>
        </div>
        {showMobileMenu && (
          <div className="shop3-mobile-menu">
            <Link to="/" onClick={() => setShowMobileMenu(false)}>
              HOME
            </Link>
            <Link to="/shop/3-column" onClick={() => setShowMobileMenu(false)}>
              SHOP 3 COLUMN
            </Link>
            <Link to="/shop/4-column" onClick={() => setShowMobileMenu(false)}>
              SHOP 4 COLUMN
            </Link>
            <Link to="/cart" onClick={() => setShowMobileMenu(false)}>
              CART
            </Link>
            <Link to="/login" onClick={() => setShowMobileMenu(false)}>
              LOGIN
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Shop3Nav;
