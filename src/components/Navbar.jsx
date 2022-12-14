import React, { useState } from 'react';

import { FaBars, FaTimes } from 'react-icons/fa';
import { links } from '../constants/links';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white fixed bg-black">
      <Link
        to="home"
        smooth
        duration={500}
        className="animate-pulse text-5xl cursor-pointer ml-2"
      >
        Çlirim Misini
      </Link>

      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNavbar(!navbar)}
        className="cursor-pointer pr-4 z-10 text-gray-500 hover:text-white duration-200 md:hidden"
      >
        {navbar ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {navbar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="text-gray-500 hover:text-white duration-200 cursor-pointer hover:scale-105 px-4 capitalize text-4xl py-6"
            >
              <Link
                onClick={() => setNavbar(!navbar)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
