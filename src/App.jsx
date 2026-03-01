import React from "react";
import Nav from "./Components/Nav/Nav";
import Freeship from "./Components/Freeshiping/Freeship";
import Homapage from "./Components/Homepage/Homapage";
import Organic from "./Components/Organiccards/Organic";
import Service from "./Components/Services30day/Service";
const App = () => {
  return (
    <div>
      <Freeship />
      <Nav />
      <Homapage />
      <Organic />
      <div >
        <Service />
      </div>
    </div>
  );
};

export default App;
