import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

import { useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className={logo ? 'hidden' : 'block'}>MADevents.</h1>
      </div>
      <ul className="hidden md:flex">
        <li >
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="venue" smooth={true} duration={500}>
            Our Venue
          </Link>
        </li>
        <li>
          <Link to="events" smooth={true} duration={500}>
            Upcoming Events
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Our Products
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact Us
          </Link>
        </li>
      </ul>

      {/* Hamburger menu and mobile dropdown */}
      <div className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose
            className="text-black"
            size={40}
            onClick={handleNav}
          />
        ) : (
          <HiOutlineMenuAlt4 size={40} onClick={handleNav} />
        )}
      </div>

      <div
        className={nav ? "absolute text-black left-0 top-0 w-full h-screen bg-gray-100/90 px-4 py-7 flex flex-col" : "absolute left-[-100%]"}>
        <ul>
          <h1>MADevents</h1>
          <li className="border-b">
            <Link to="home" smooth={true} duration={500} onClick={handleNav} >
              Home
            </Link>
          </li>
          <li className="border-b">
            <Link to="venue" smooth={true} duration={500} onClick={handleNav} >
              Our Venue
            </Link>
          </li>
          <li className="border-b">
            <Link to="events" smooth={true} duration={500} onClick={handleNav} >
              Upcoming Events
            </Link>
          </li>
          <li className="border-b">
            <Link to="gallery" smooth={true} duration={500} onClick={handleNav} >
              Gallery
            </Link>
          </li>
          <li className="border-b">
            <Link to="contact" smooth={true} duration={500} onClick={handleNav} >
              Our Products
            </Link>
            </li>
          <li className="border-b">
            <Link to="contact" smooth={true} duration={500} onClick={handleNav} >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex flex-row px-5 py-3 justify-between my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaInstagram className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
