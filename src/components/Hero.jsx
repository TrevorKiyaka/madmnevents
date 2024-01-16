import React from 'react'
import beachVid from '../assets/beachVid.mp4'

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>
      <video className='w-full h-full object-cover'
       src={beachVid}
        autoPlay
        loop  
         muted />
         <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'>
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white p-4'>
                <h1>Experience Rhumba Sundays</h1>
                <p className='my-5'>Join us for an unforgettable sunday filled with music, 
                    entertainment, and food that will last a lifetime.</p>
                    <div >
                        <button className='mr-4'>BUY</button>
                        <button>SHOP</button>
                    </div>
            </div>
             </div>
    </div>
  )
}

export default Hero
