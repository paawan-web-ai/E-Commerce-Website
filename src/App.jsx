import React from "react";
import Nav from "./Components/Nav/Nav";
import Freeship from "./Components/Freeshiping/Freeship";
import Homapage from "./Components/Homepage/Homapage";
import Organic from "./Components/Organiccards/Organic";
import Service from "./Components/Services30day/Service";
import Price from "./Components/PricingCard/Price";
import Deal from "./Components/Deal/Deal";

const App = () => {
  return (
    <div>
      <Freeship />
      <Nav />
      <Homapage />
      <Organic />
      <div>
        <Service />
      </div>

      <div className="price-wrapper" style={{ height: "600px", position: "relative" }}>
        <Price
          mode="lens"
          scale={0.25}
          ior={1.15}
          thickness={2}
          transmission={1}
          roughness={0}
          chromaticAberration={0.05}
          anisotropy={0.01}
        />
      </div>
      <Deal />
    </div>
  );
};

export default App;
