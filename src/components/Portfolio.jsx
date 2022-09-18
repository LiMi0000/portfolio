import React from 'react';

import { portfolios } from '../constants/portfolios';

import { RiAttachment2 } from 'react-icons/ri';

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="w-full bg-gradient-to-b from-black to-gray-800 md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-10">
          <p className="text-4xl text-white font-bold inline border-b-2 border-gray-500">
            Check out some of my personal projects!
          </p>
          <p className="py-6 text-white">
            Need something more specific? <br /> We can have a call where I can
            explain some of the features <br /> I have integrated in which are
            confidential and I won't be able to present at this time!
          </p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-2">
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              id={id}
              className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
            >
              <img className="rounded-t-lg" src={src} alt="" />

              <div className="p-5 flex justify-between">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={demo}
                  className="duration-300 inline-flex items-center ml-2 py-2 px-7 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-500 "
                >
                  Demo
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={code}
                  className="duration-300  inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white  hover:text-blue-500   "
                >
                  <RiAttachment2 size={20} />
                  Github Repo
                </a>
              </div>
            </div>

            // <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            //   <img
            //     src={src}
            //     alt=""
            //     className="rounded-md duration-300 hover:scale-110"
            //   />
            //   <div className="flex items-center justify-center">
            //     <a
            //       href={demo}
            //       target="_blank"
            //       rel="noreferrer"
            //       className="w-full px-9 py-1 m-4 duration-200 hover:scale-105 text-gray-500 hover:text-white"
            //     >
            //       Demo
            //     </a>
            //     <a
            //       href={code}
            //       target="_blank"
            //       rel="noreferrer"
            //       className="w-full px-9 py-1 m-4 duration-200 hover:scale-105 text-gray-500 hover:text-white"
            //     >
            //       Code
            //     </a>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
