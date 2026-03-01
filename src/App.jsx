import React from "react";
import Nav from "./Components/Nav/Nav";
import Freeship from "./Components/Freeshiping/Freeship";
import Homapage from "./Components/Homepage/Homapage";
import Organic from "./Components/Organiccards/Organic";
const App = () => {
  return (
    <div>
      <Freeship />
      <Nav />
      <Homapage />
      <Organic />
    </div>
  );
};

export default App;
