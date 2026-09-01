import React from "react";
import Shop3FreeShip from "../../Components/Navitems/Shop3FreeShiping/Shop3FreeShip";
import Shop3Header from "../../Components/Navitems/Shop3Header/Shop3Header";
import Shop3Nav from "../../Components/Navitems/Shop3Navbar/Shop3Nav";
import Leftsidebar from "../../Components/Navitems/LeftSideBar/Leftsidebar";

const Shopleft = () => {
  return (
    <div>
      <Shop3FreeShip />
      <Shop3Nav />
      <Shop3Header />
      <Leftsidebar />
    </div>
  );
};

export default Shopleft;
