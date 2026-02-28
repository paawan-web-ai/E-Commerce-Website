import React from "react";
import Nav from "./Components/Nav/Nav";
import Freeship from "./Components/Freeshiping/Freeship";
import Homapage from "./Components/Homepage/Homapage";
const App = () => {
  return (
    <div>
      <Freeship />
      <Nav />
      <Homapage />
    </div>
  );
};

export default App;
