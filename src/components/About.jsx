import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="md:h-screen w-full bg-gradient-to-b  from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            About
          </p>
        </div>
        <br />
        <p className="text-2xl font-bold text-white pb-2">Employment History</p>
        <p className="pb-4">
          Software Developer, Rex Solution, Skopje - January 2022 - June 2022
        </p>
        <p className="text-m">
          Started working in January, which I started as a Jr Software Developer
          especially with Front End, where after a month started working on a
          real project, where I did the Front End part with React Native for
          mobile applications. It was a good experience as a junior to work on a
          team, to take the tasks, to work under pressure and have daily or
          weekly meetings with the team to discuss about the further development
          process of the application
        </p>
        <br />
        <p className="text-2xl font-bold text-white pb-2">Education</p>
        <p className="pb-4">
          Web Developer, SEDC - Seavus Education and Development Center, Skopje
          - November 2020 - November 2021
        </p>
        <p className="text-m">
          It was definitely a challenging year but also an interesting one
          learning new and different stuff. In the first couple of months we
          learned front end especially HTML5, CSS3, JavaScript, working on
          structure of web content, styling them and making them functional,
          also worked on the project for front end part that gave me a feeling
          on how companies work, how teams define their work on who's going to
          do what, to work under pressure, with time limit. After that we
          started with NodeJS, creating servers, making the front end part
          dynamically using a NodeJs framework ExpressJS with set of features
          for web and mobile applications. Then we learned about databases like
          SQL, MongoDB continuing with ReactJS and AngularJS which was so good
          to learn to build front end applications more faster. In the last
          month we learned MEAN/MERN that helped us connect all technologies
          that we learned in one application
        </p>
      </div>
    </div>
  );
};

export default About;
