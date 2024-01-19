import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll';
import cookout from '../assets/cookout.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover'
       src={cookout}
        autoPlay
        loop  
         muted />
         <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white p-4'>
                <h1>Experience Minnesota's finest events</h1>
                <p className='my-5'>Join us for an unforgettable sunday filled with music, 
                    entertainment, and food that will last a lifetime.</p>
                    <div >
                    <Link to="events" smooth={true} duration={500}>
                    <button className='mr-4'>BOOK NOW</button>
                    </Link>
                        {/* linking process to shopify*/}
                        <button onClick={() => window.location.href = 'https://www.shopify.com'}>SHOP NOW</button>
                    </div>
            </div>
             </div>
    </div>
  )
}

export default Hero
