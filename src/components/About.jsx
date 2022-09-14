import React from 'react';

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b  from-gray-800  to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-2 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nisi
          molestiae provident pariatur assumenda nesciunt, dolores ad
          praesentium necessitatibus illo labore eligendi maiores quod ullam
          accusantium, cum eaque ipsum quia nostrum fugiat! Magnam saepe facere
          ad eum sunt nam dignissimos, numquam itaque eveniet quisquam soluta
          magni, expedita cumque. Facilis, itaque!
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          provident natus non. Repellat, consequatur voluptatem. Aliquid modi ex
          adipisci beatae veniam fugiat earum quibusdam. Quaerat minus cum
          cupiditate, ratione sed officiis sapiente dolorum fugit inventore?
          Molestias accusantium placeat dignissimos excepturi nobis adipisci
          error saepe consequuntur eos ullam? Similique, aperiam beatae?
        </p>
      </div>
    </div>
  );
};

export default About;
