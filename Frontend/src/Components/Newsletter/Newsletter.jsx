import React from 'react'
import "./Newsletter.css"
const Newsletter = () => {
    return (
        <div className='new-main  text-white flex justify-center items-center gap-[12rem] mt-10 w-full py-5'>
            <div className=' new-top flex items-center gap-3 text-lg'>
                <i class="ri-send-ins-line"></i>
                <h1>Subscribe Newsletter And Get Discount</h1>
            </div>
            <div className='new-bottom flex'>
                <input className='bg-white text-black px-5 py-2 rounded-l-2xl' type="email" name="" id="" placeholder='Your email address' />
                <button className='bg-zinc-700 px-3 py-2 rounded-r-2xl'>Sign Up</button>
            </div>
        </div>
    )
}

export default Newsletter
