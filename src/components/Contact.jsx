import React from 'react';

import { Link } from 'react-scroll';

import { BsArrowUpCircle } from 'react-icons/bs';

const Contact = () => {
  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      >
        <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-2 border-gray-500">
              Get in Touch
            </p>
            <p className="py-6">Submit the form to get in touch with me</p>
          </div>

          <div className="flex justify-center items-center">
            <form
              method="POST"
              action="https://getform.io/f/be243307-a5e8-4e9c-8ab0-0915a65d2fbe"
              className="flex flex-col w-full md:w-10/12"
            >
              <input
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <input
                className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                type="text"
                name="email"
                placeholder="Enter your email"
              />
              <textarea
                name="message"
                placeholder="Enter your message..."
                rows="10"
                className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              ></textarea>
              <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-2 my-8 mx-auto flex items-center rounded-md hover:font-bold hover:text-white hover:scale-110 duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>
        <button
          // id="to-top-button"
          // onclick="goToTop()"
          // title="Go To Top"
          className="hidden fixed z-90 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold"
        >
          Up
        </button>
        {/* <div class="relative w-full">
          <div class="absolute bottom-0 right-0 h-16 w-16 text-center cursor-pointer animate-bounce">
            <Link to="home" smooth duration={500}>
              <BsArrowUpCircle size={40} />
            </Link>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
