import React from 'react'
import Building from '../assets/building.jpg';
import Restaurant1 from '../assets/restaurant1.jpg';
import Restaurant2 from '../assets/restaurant2.jpg';
import Restaurant3 from '../assets/restaurant3.jpg';
import Restaurant4 from '../assets/restaurant4.jpg';
const Venue = () => {
  return (
    <div id="venue" >
    <div className='max-w-[1240px] mx-auto py-8 px-4'>
        <h1 className='text-center'>Our Venue</h1>
      <p className='text-center mt-3'>Check out hotspot</p>
      <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Building} alt="/" />
            <img className='w-full h-full object-cover' src={Restaurant1} alt="/" />
            <img className='w-full h-full object-cover' src={Restaurant2} alt="/" />
            <img className='w-full h-full object-cover' src={Restaurant3} alt="/" />
            <img className='w-full h-full object-cover' src={Restaurant4} alt="/" />
        </div>
    </div>
    </div>
  )
}

export default Venue;
