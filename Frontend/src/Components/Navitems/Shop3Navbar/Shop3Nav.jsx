import { React, useState } from 'react'
import "./Shop3Nav.css";

const Shop3Nav = () => {
    const [showdropdown, setShowDropdown] = useState(true)
    return (
        <div className='main-navbar'>
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
                <div className='mt-10 px-4 flex justify-between items-center second-nav'>
                    <h3
                        onClick={() => setShowDropdown(prev => !prev)}
                        className=' flex gap-2 text-2xl font-bold bg-green-500 text-white py-4 px-6 rounded-t-3xl cursor-pointer'>All Department <p><i
                            class="ri-arrow-down-s-line"></i></p></h3>
                    <div className={`absolute  top-59 w-63.5 border-2 border-green-500 rounded-b-2xl overflow-hidden bg-white z-50 transition-all duration-500 ease-in-out ${showdropdown ? "max-h-96 opacity-100 " : "max-h-0 opacity-100 "}`}
                    >
                        <div className="p-3 flex flex-col gap-5">
                            <h1 className="border-b p-2 text-xl">hello</h1>
                            <h1 className="border-b p-2 text-xl">hello</h1>
                            <h1 className="border-b p-2 text-xl">hello</h1>
                            <h1 className="border-b p-2 text-xl">hello</h1>
                            <h1 className="p-2 text-xl">hello</h1>
                        </div>
                    </div>




                    <div className='flex gap-10 '>
                        <p className='hover:text-green-600'>HOME <i class="ri-arrow-down-s-line"></i></p>
                        <p className='hover:text-green-600'>SHOP <i class="ri-arrow-down-s-line"></i></p>
                        <p className='hover:text-green-600'>PAGES <i class="ri-arrow-down-s-line"></i></p>
                        <p className='hover:text-green-600'>BLOG <i class="ri-arrow-down-s-line"></i></p>
                        <p className='hover:text-green-600'>ABOUT US <i class="ri-arrow-down-s-line"></i></p>
                        <p className='hover:text-green-600'>CONTACT US <i class="ri-arrow-down-s-line"></i></p>
                    </div>
                    <div>
                        <p className='text-xl hover:text-green-600'><i className=" text-xl ri-user-follow-line "></i> LOGIN</p>
                    </div>
                </div>
            </nav >

        </div >
    )
}

export default Shop3Nav