import React from 'react';

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';

import { HeroImage } from '../assets';

const Home = () => {
  return (
    <>
      <img src={HeroImage} alt="" />
      <MdOutlineKeyboardArrowRight />
    </>
  );
};

export default Home;
