// import React from 'react';
// import Maps from '../components/Maps'
// import {
//   FaFacebook,
//   FaTwitter,
//   FaInstagram,
//   FaPinterest,
//   FaYoutube,
//   FaLocationArrow,
//   FaMobileAlt,
// } from 'react-icons/fa';

// import { MdEmail } from "react-icons/md";
// import mainlogo from '../assets/mainlogo.png'
// const Footer = () => {
//   return (
//     <div id="contact">
//     <div className='bg-gray-100 dark:bg-gray-800'>
//         <div className='max-w-[1240px] mx-auto'>
//           <div className='grid md:grid-cols-2 py-5'>
//               <div className='py-8 px-4  text-white'>
//                  <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
//                  <img src={mainlogo} alt='/' className='max-w-[150px] mb-4'/>
                 
//                  </h1>
//                  <p>
//                   vfje e voeovwoeverver rever oervrevejvsewvv eveo vwdjvw verojvewds 
//                  </p>
//                  <br/>
//                  <div className='flex items-center gap-3 mt-3'>
//                     <FaLocationArrow/>
//                     <p>2590 FREEWAY BLVD BROOKLYN CENTER MN 55430</p>
//                  </div>

//                  <div className='flex items-center gap-3 mt-3'>
//                     <FaMobileAlt/>
//                     <p>+ 1 234 567 8900</p>
//                  </div>

//                  <div className='flex items-center gap-3 mt-3'>
//                  <MdEmail />
//                     <p>madMNevents@gmail.com</p>
//                  </div>

//                  {/* social handles */}
//                     <div className='flex justify-between py-4 w-full sm:max-w-[280px] my-4 text-white'>
//                       <FaFacebook className='text-2xl cursor-pointer text-white' />
//                       <FaTwitter className='text-2xl cursor-pointer text-white' />
//                       <FaYoutube className='text-2xl cursor-pointer text-white' />
//                       <FaPinterest className='text-2xl cursor-pointer text-white' />
//                       <FaInstagram className='text-2xl cursor-pointer text-white' />
//                         </div>
//               </div>
//               <div className='flex md:pl-10'>
//                 <div>
//                   <div className='py-8 px-4 text-white'>
//                     <h1 >Our Location</h1>
//                     <Maps/>
//                   </div>
//                 </div>
//               </div>
//           </div>
//         </div>
//         <div className='text-center  px-4 py-10 border-t-2 border-gray-300/50 text-white'>
//                     &copy; 2024 All rights reserved  || Designed by Trevor Kiyaka
//                   </div>
//     </div>
//     </div>
//   )
// }

// export default Footer

import React from 'react';
import Maps from '../components/Maps';
import { FaFacebook, FaTwitter, FaInstagram, FaPinterest, FaYoutube, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import mainlogo from '../assets/mainlogo.png';

const Footer = () => {
  return (
    <div id="contact">
      <div className='bg-gray-100 dark:bg-gray-800'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid md:grid-cols-2 py-5'>
            <div className='py-8 px-4 text-white'>
              <h1 className='flex items-center gap-3 text-xl sm:text-3xl font-bold text-justify sm:text-left'>
                <img src={mainlogo} alt='/' className='max-w-[150px] mb-4' />
              </h1>
              <p>
                vfje e voeovwoeverver rever oervrevejvsewvv eveo vwdjvw verojvewds
              </p>
              <div className='flex items-center gap-3 mt-3'>
                <FaLocationArrow />
                <p>2590 FREEWAY BLVD BROOKLYN CENTER MN 55430</p>
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <FaMobileAlt />
                <p>+ 1 234 567 8900</p>
              </div>
              <div className='flex items-center gap-3 mt-3'>
                <MdEmail />
                <p>madMNevents@gmail.com</p>
              </div>
              {/* social handles */}
              <div className='flex justify-between py-4 w-full sm:max-w-[280px] my-4 text-white'>
                <FaFacebook className='text-2xl cursor-pointer text-white' />
                <FaTwitter className='text-2xl cursor-pointer text-white' />
                <FaYoutube className='text-2xl cursor-pointer text-white' />
                <FaPinterest className='text-2xl cursor-pointer text-white' />
                <FaInstagram className='text-2xl cursor-pointer text-white' />
              </div>
            </div>
            <div className='flex md:pl-10'>
              <div className='py-8 px-4 text-white'>
                <h1 className='mb-6'>Our Location</h1>
                <Maps />
              </div>
            </div>
          </div>
        </div>
        <div className='text-center px-4 py-10 border-t-2 border-gray-300/50 text-white'>
          &copy; 2024 All rights reserved || Designed by Trevor Kiyaka
        </div>
      </div>
    </div>
  );
}

export default Footer;
