import React from "react";
import { Routes, Route } from "react-router-dom";

/* Shop pages */
import Shopthreecolumn from "../pages/shop/Shopthreecolumn";
import Shopfourcolumn from "../pages/shop/Shopfourcolumn";
import Shopleft from "../pages/shop/Shopleft";
import Shopright from "../pages/shop/Shopright";
import Shopno from "../pages/shop/Shopno";

/* Order pages */
import Cart from "../pages/order/Cart";
import Checkout from "../pages/order/Checkout";
import Compare from "../pages/order/Compare"
import MyAccount from "../pages/order/MyAccount";
import Wishlist from "../pages/order/Wishlist";

// /* Product pages */
// import ProductDetails from "../pages/product/ProductDetails";
// import ProductVariable from "../pages/product/ProductVariable";
// import ProductGrouped from "../pages/product/ProductGrouped";

const AppRoutes = () => {
    return (
        <Routes>
            {/* Shop */}
            <Route path="/shop/3-column" element={<Shopthreecolumn />} />
            <Route path="/shop/4-column" element={<Shopfourcolumn />} />
            <Route path="/shop/left-sidebar" element={<Shopleft />} />
            <Route path="/shop/right-sidebar" element={<Shopright />} />
            <Route path="/shop/no-sidebar" element={<Shopno />} />

            {/* Order Pages */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/wishlist" element={<Wishlist />} />

            {/* Product Pages */}
            {/* <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/product/variable/:id" element={<ProductVariable />} />
            <Route path="/product/grouped/:id" element={<ProductGrouped />} /> */}
        </Routes>
    );
};

export default AppRoutes;