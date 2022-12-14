import React from 'react';

import { technologies } from '../constants/technologies';

import { Link } from 'react-scroll';

import { BsArrowUpCircle } from 'react-icons/bs';

const Experience = () => {
  return (
    <>
      <div
        name="skills"
        className="w-full bg-gradient-to-b from-gray-800 to-black md:h-screen"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="mt-10">
            <p className="text-4xl font-bold inline border-b-2 border-gray-500">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center px-12 sm:px-0">
            {technologies.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
              >
                <img className="w-20 mx-auto" src={src} alt="" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* <div class="relative">
        <div class="absolute text-white bottom-5 right-10 text-center cursor-pointer animate-bounce">
          <Link to="home" smooth duration={500}>
            <BsArrowUpCircle size={40} />
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Experience;
