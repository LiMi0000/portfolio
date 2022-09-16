import React from 'react';

import { HiOutlineArrowSmRight } from 'react-icons/hi';
import { HeroImage } from '../assets';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full mt-10 mr-10">
          <h2 className=" text-4xl sm:text-7xl font-bold text-white ">
            Web Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-3xl">
            I have experience working on different technologies and building
            websites with{' '}
            <span className="text-orange-500 font-semibold">HTML</span>,
            <span className="text-blue-500 font-semibold"> CSS</span>,
            <span className="text-yellow-500 font-semibold"> JAVASCRIPT</span>,
            <span className="text-blue-800 font-semibold"> TYPESCRIPT</span>,
            <span className="text-blue-600 font-semibold"> REACT</span> &
            building mobile apps with{' '}
            <span className="text-gray-300 font-semibold">React Native</span> on
            Front-End but also I have knowledge on Back-End with
            <span className="text-green-500 font-semibold"> NodeJS/</span>
            <span className="text-gray-400 font-semibold">ExpressJS</span>
            <br />
            Currently, I'd love to work on{' '}
            <span className="font-bold text-white">Front End</span> with
            ReactJS/TS or <span className="font-bold text-white">Back End</span>{' '}
            with NodeJS/ExpressJS
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiOutlineArrowSmRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-96 hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="h-screen w-full bg-gradient-to-b  from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-2xl sm:text-7xl font-bold text-white">
//             I'm a Web Developer
//           </h2>
//           <p className="text-gray-500 py-4 max-w-lg">
//             In the high school i was studying mechanical engineering, especially
//             technician for computer leadership which means transferring a piece
//             of metal to something that clients wants through some codes that
//             machine understand. After that i decided for further studying to go
//             with programming and started my journey in Seavus. It was an amazing
//             year with some hard times and good times obviously, but going
//             through ton of homework and projects that we have through that year
//             it really helped us a lot learning about programming. As a junior i
//             want to start in any field to begin my journey on programming world
//             and i'm ready to work and give everything that i know with everyone
//             i work, collaborating with teams, learning more new technologies
//             that are coming up, adapting to different ways of working, meeting
//             and communicating with new people.
//           </p>
//           <div className="">
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <HiOutlineArrowSmRight size={25} className="ml-1" />
//               </span>
//             </Link>
//           </div>
//         </div>
//         <div className="">
//           <img
//             src={HeroImage}
//             alt="my_profile"
//             className="rounded-2xl mx-auto w-2/3 md:w-96"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
