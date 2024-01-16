import {BsPerson} from 'react-icons/bs'
import {BsSearch} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaFacebook,FaInstagram,FaPinterest,FaYoutube,FaTwitter} from 'react-icons/fa'
import { useState,React } from 'react'


const Navbar = () => {

    const [nav,setNav] = useState(false);
    const [logo,setLogo] = useState(false);
    const handleNav = () => {
        setNav(!nav);
        setLogo(!logo);
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white'>
      <div>
        <h1 className={logo ? 'hidden' : 'block'}>madMNevents.</h1>
      </div>
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>Our Venue</li>
        <li>Upcoming Events</li>
        <li>Gallery</li>
      </ul>

      <div className='hidden md:flex'>
        <BsPerson className='mr-3' size={20}/>
        <BsSearch size={20}/>
      </div>

    {/* hamburger menu */}
    <div onClick={handleNav} className='md:hidden z-10'>
    {nav ? <AiOutlineClose className='text-black' size={40} /> : <HiOutlineMenuAlt4 size={40} />}
      </div>

      {/* mobile menu dropdown */}
      <div className={nav ? 'absolute text-black left-0 top-0 w-full h-screen bg-gray-100/90 px-4 py-7 flex flex-col' : 'absolute left-[-100%]'}>
    <ul>
            <h1>MadMNevents</h1>
                <li className='border-b'>Home</li>
                <li className='border-b'>Our Venue</li>
                <li className='border-b'>Upcoming Events</li>
                <li className='border-b'>Gallery</li>
            </ul>
            <div className='flex flex-col'>
                <button className='my-6'>Search</button>
                <button>Account</button>
            </div>
            <div className='flex flex-row px-5 py-3 justify-between my-6'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaInstagram className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
            </div>
      </div>
    </div> 
  )
}

export default Navbar