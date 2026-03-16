import React, { useState } from "react";
import Nav from "./Components/Nav/Nav";
import AppRoutes from "./routes/AppRoutes";
import Freeship from "./Components/Freeshiping/Freeship";
import Homapage from "./Components/Homepage/Homapage";
import Organic from "./Components/Organiccards/Organic";
import Service from "./Components/Services30day/Service";
import Deal from "./Components/Deal/Deal";
import Carousel from "./Components/Carousel/Carousel";
import Cardstitle from "./Components/Cardstitle/Cardstitle";
import SalesBoxes from "./Components/Salesboxes/SalesBoxes";
import Latest from "./Components/LatestBlogs/Latest";
import BrandSlider from "./Components/BrandSlider/BrandSlider";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CreateAddToCart from "./pages/CreateAddToCart"
const App = () => {
  const [cart, setcart] = useState([]);

  const addToCart = (product) => {
    setcart([...cart, product]);
  };
  return (
    <div>
      <Router>



        <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <>
                <Freeship />
                <Nav cart={cart} />
                <Homapage />
                <Organic />
                <Service />



                <div className="carsousel-main flex justify-center gap-5 py-10">
                  <Deal />
                  <div className="carsousel-child2">
                    <Carousel />
                  </div>
                </div>

                <Cardstitle addToCart={addToCart} />
                <SalesBoxes />
                <Latest />
                <BrandSlider />
              </>
            }
          />

          {/* Shop Routes */}
          <Route path="/*" element={<AppRoutes />} />


          {/* Create Product Page */}
          <Route path="/createaddtocart" element={<CreateAddToCart />} />


        </Routes>
      </Router>

    </div>
  );
};

export default App;
