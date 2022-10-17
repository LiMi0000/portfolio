import React from 'react';

import { diploma, cpd } from '../assets';

import { Link } from 'react-scroll';

import { BsArrowUpCircle } from 'react-icons/bs';

// w-full bg-gradient-to-b  flex justify-evenly from-gray-800  to-black text-white md:h-screen
// max-w-screen-lg flex flex-col justify-center h-full

const About = () => {
  return (
    <>
      <div
        name="about"
        className="md:h-screen w-full flex justify-center bg-gradient-to-b  from-gray-800  to-black text-white"
      >
        <div className="max-w-screen-2xl flex flex-col items-center justify-center h-full md:flex-row">
          <div className="px-6">
            <div className="mt-10">
              <p className="text-4xl font-bold inline border-b-2 border-gray-500">
                About
              </p>
            </div>
            <br />
            <p className="text-2xl font-bold text-white pb-2">
              Employment History
            </p>
            <p className="border-b-2 border-white w-fit ">
              Front End Web Developer, Freelance - April 2021
            </p>
            <p className="text-md pt-4">
              It's a great experience working on different projects, working
              with multiple people and building interesting projects for
              specific reason to help fill people's needs.
              <li>
                Handling all verbal and written communications between hosting
                companies, clients, and vendors.
              </li>
              <li>
                Meeting with the prospective clients to review website, and
                gather the client specifications for new or existing websites.
              </li>
              <li>
                Built, designed, maintained new projects using React, CSS, SCSS,
                TypeScript
              </li>
              <li>
                Built some readable and serviceable app in React Native with
                Node/Express
              </li>
              <li>
                Worked on both large-scale projects and small custom tasks that
                span a wide variety of analysis problems
              </li>
            </p>
            <br />
            <p className="border-b-2 border-white w-fit">
              Software Developer, Rex Solution, Skopje - January 2022 - June
              2022
            </p>
            <p className="pt-4 text-md">
              Started working in January, which I started as a Software
              Developer especially with Front End, where after a month started
              working on a real project, where I did the Front End part with
              React Native for mobile applications. It was a good experience to
              work on a team, to take the tasks, to work under pressure and have
              daily or weekly meetings with the team to discuss about the
              further development process of the application
            </p>
            <br />
            <p className="text-2xl font-bold text-white pb-2">Education</p>
            <p className="border-b-2 border-white w-fit">
              Web Developer, SEDC - Seavus Education and Development Center,
              Skopje - November 2020 - November 2021
            </p>
            <p className="pt-4 text-md">
              It was definitely a challenging year but also an interesting one
              learning new and different stuff. In the first couple of months we
              learned front end especially HTML5, CSS3, JavaScript, working on
              structure of web content, styling them and making them functional,
              also worked on the project for front end part that gave me a
              feeling on how companies work, how teams define their work on
              who's going to do what, to work under pressure, with time limit.
              After that we started with NodeJS, creating servers, making the
              front end part dynamically using a NodeJs framework ExpressJS with
              set of features for web and mobile applications. Then we learned
              about databases like SQL, MongoDB continuing with ReactJS and
              AngularJS which was so good to learn to build front end
              applications more faster. In the last month we learned MEAN/MERN
              that helped us connect all technologies that we learned in one
              application
            </p>
          </div>

          <div className="mt-16 px-6">
            <img
              src={diploma}
              alt="my profile"
              className="mx-auto py-6 hover:scale-150  duration-300"
            />
            <img
              src={cpd}
              alt="my profile"
              className="mx-auto hover:scale-150  duration-300"
            />
          </div>
        </div>
      </div>
      {/* <div class="relative ">
        <div class="absolute text-white bottom-5 right-10 text-center cursor-pointer animate-bounce">
          <Link to="home" smooth duration={500}>
            <BsArrowUpCircle size={40} />
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default About;

// const About = () => {
//   return (
//     <>
//       <div
//         name="about"
//         className="w-full bg-gradient-to-b flex justify-evenly from-gray-800  to-black text-white md:h-screen"
//       >
//         <div className="max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full">
//           <div className="mt-10">
//             <p className="text-4xl font-bold inline border-b-2 border-gray-500">
//               About
//             </p>
//           </div>
//           <br />
//           <p className="text-2xl font-bold text-white pb-2">
//             Employment History
//           </p>
//           <p className="pb-4">
//             Software Developer, Rex Solution, Skopje - January 2022 - June 2022
//           </p>
//           <p className="text-m">
//             Started working in January, which I started as a Jr Software
//             Developer especially with Front End, where after a month started
//             working on a real project, where I did the Front End part with React
//             Native for mobile applications. It was a good experience as a junior
//             to work on a team, to take the tasks, to work under pressure and
//             have daily or weekly meetings with the team to discuss about the
//             further development process of the application
//           </p>
//           <br />
//           <p className="text-2xl font-bold text-white pb-2">Education</p>
//           <p className="pb-4">
//             Web Developer, SEDC - Seavus Education and Development Center,
//             Skopje - November 2020 - November 2021
//           </p>
//           <p className="text-m">
//             It was definitely a challenging year but also an interesting one
//             learning new and different stuff. In the first couple of months we
//             learned front end especially HTML5, CSS3, JavaScript, working on
//             structure of web content, styling them and making them functional,
//             also worked on the project for front end part that gave me a feeling
//             on how companies work, how teams define their work on who's going to
//             do what, to work under pressure, with time limit. After that we
//             started with NodeJS, creating servers, making the front end part
//             dynamically using a NodeJs framework ExpressJS with set of features
//             for web and mobile applications. Then we learned about databases
//             like SQL, MongoDB continuing with ReactJS and AngularJS which was so
//             good to learn to build front end applications more faster. In the
//             last month we learned MEAN/MERN that helped us connect all
//             technologies that we learned in one application
//           </p>
//         </div>
//         <div className="h-full flex flex-col items-center justify-center ">
//           <div className="py-10 bg-red-500">
//             <img
//               src={diploma}
//               alt="yt"
//               className=" sm:max-w-sm md:max-w-md hover:scale-150 duration-300"
//             />
//           </div>
//           <div>
//             <img
//               src={cpd}
//               alt="amazon"
//               className=" sm:max-w-sm md:max-w-md hover:scale-150 duration-300"
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default About;
