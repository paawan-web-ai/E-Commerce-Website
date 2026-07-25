import React from 'react'
import Shop3FreeShip from '../../Components/Navitems/Shop3FreeShiping/Shop3FreeShip'
import Shop3Nav from '../../Components/Navitems/Shop3Navbar/Shop3Nav'
import Shop3Header from '../../Components/Navitems/Shop3Header/Shop3Header'
import Shop3Cards from '../../Components/Navitems/Shop3Cards/Shop3Cards'
import BrandSlider from '../../Components/BrandSlider/BrandSlider'
import Newsletter from '../../Components/Newsletter/Newsletter'
import Footer from '../../Components/Footer/Footer'
const Shopthreecolumn = () => {
    return (
        <div>
            <Shop3FreeShip />
            <Shop3Nav />
            <Shop3Header />
            <Shop3Cards />
            <BrandSlider />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Shopthreecolumn
