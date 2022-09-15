import React from 'react';

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            Contact
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
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
