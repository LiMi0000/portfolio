import React from 'react';

import { portfolios } from '../constants/portfolios';

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-10">
          <p className="text-4xl text-white font-bold inline border-b-2 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 text-white">Check out some of my work</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-2">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-300 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-9 py-1 m-4 duration-200 hover:scale-105 text-gray-500 hover:text-white"
                >
                  Demo
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full px-9 py-1 m-4 duration-200 hover:scale-105 text-gray-500 hover:text-white"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
