import React, { useState } from "react";
import Nav from "./Components/Nav/Nav";
import Freeship from "./Components/Freeshiping/Freeship";
import Homapage from "./Components/Homepage/Homapage";
import Organic from "./Components/Organiccards/Organic";
import Service from "./Components/Services30day/Service";
import Deal from "./Components/Deal/Deal";
import Carousel from "./Components/Carousel/Carousel";
import ImageGridScrollUp from "./Components/ImageGridScrollUp/ImageGridScrollUp";
import Cardstitle from "./Components/Cardstitle/Cardstitle";
import SalesBoxes from "./Components/Salesboxes/SalesBoxes";

const App = () => {
  const [cart, setcart] = useState([]);

  const addToCart = (product) => {
    setcart([...cart, product]);
  };
  return (
    <div>
      <Freeship />
      <Nav cart={cart} />
      <Homapage />
      <Organic />
      <div>
        <Service />
      </div>
      <div className="imagescroll-box">
        <ImageGridScrollUp />
      </div>

      <div className=" carsousel-main flex justify-center gap-5 py-10">
        <Deal />

        <div className="carsousel-child2">
          <Carousel />
        </div>
      </div>
      <Cardstitle addToCart={addToCart} />
      <SalesBoxes />
    </div>
  );
};

export default App;
