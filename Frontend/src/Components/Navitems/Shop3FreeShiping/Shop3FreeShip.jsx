import React from 'react'
import "./Shop3FreeShip.css"
const Shop3FreeShip = () => {
    return (

        <div className='freeship-main flex justify-between px-5 md:px-50 py-3 border-b border-gray-400 mb-5'>
            <div>
                <p>Free Shipping for all orders of <span className='font-bold'>$200</span></p>
            </div>
            <div className='flex gap-5 lg:gap-10 '>
                <p className='hide-on-mobile'>USD $</p>
                <p className='hide-on-mobile'>ENGLISH</p>
                <p className='hide-on-mobile'><i class="ri-stack-line"></i> MY COMPARE</p>
                <p><i class="ri-mail-line "></i>NEWSLETTER</p>
            </div>
        </div>


    )
}

export default Shop3FreeShip
