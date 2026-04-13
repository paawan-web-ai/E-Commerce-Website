import React from 'react'
import "./Shop3Nav.css";

const Shop3Nav = () => {
    return (
        <nav className='shop3-nav-main w-full px-5 lg:px-50 py-5'>
            {/* Main Container: Flex-wrap allows items to drop to next line */}
            <div className='flex flex-wrap lg:flex-nowrap justify-between items-center gap-y-5'>

                {/* Logo - Always left (or top-left) */}
                <div className='shop3-heading text-4xl md:text-6xl  font-bold order-1'>
                    <h1>FULO</h1>
                </div>

                {/* Icons - Moved to order-2 to stay next to logo on smaller screens */}
                <div className='flex items-center gap-5 order-2 lg:order-3'>
                    <div className="relative">
                        <i className="ri-heart-line text-3xl md:text-4xl"></i>
                        <span className="absolute top-0 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                            2
                        </span>
                    </div>
                    <div className="relative">
                        <i className="ri-shopping-bag-line text-3xl md:text-4xl"></i>
                        <span className="absolute top-0 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                            2
                        </span>
                    </div>
                </div>

                {/* Wrapper for Search and Call */}
                <div className='shop3-items w-full lg:w-auto flex flex-col lg:flex-row gap-5 lg:gap-17 items-center order-3 lg:order-2'>
                    {/* Call Section: Hidden via CSS at 1352px as per your request */}
                    <div className='shop3-call flex items-center gap-2'>
                        <div className='text-4xl text-green-600'>
                            <i className="ri-phone-line"></i>
                        </div>
                        <div>
                            <p className="text-sm">need help?</p>
                            <p className='text-xl font-semibold'>+00 123456789</p>
                        </div>
                    </div>

                    {/* Search Box: Becomes full width/centered at smaller sizes */}
                    <div className='shop3-search flex items-center border w-full lg:w-fit px-5 md:px-10 py-1 rounded-4xl border-green-800'>
                        <input type="text" placeholder="Search..." className='outline-none p-2 text-lg w-full' />
                        <i className="ri-search-line"></i>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Shop3Nav