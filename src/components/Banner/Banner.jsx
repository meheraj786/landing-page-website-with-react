import React from 'react';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import bannerLaptop from '../../assets/bannerLaptop.png';

const Banner = () => {
  return (
    <div className="relative bg-[url(assets/banner.png)] pt-[195px] pb-[456px] bg-cover bg-center bg-no-repeat">
      <Container>
        <Flex className="flex-col text-white justify-center">
          <h1 className="md:w-full md:max-w-[796px] font-primary text-[56px] font-bold text-center mb-5">
            Get your work done with Management Tool
          </h1>
          <p className="md:w-full md:max-w-[467px] font-secondary text-[18px] font-bold text-center">
            The world's first project management platform that connects everything
          </p>
        </Flex>
        <Flex className="relative mt-8 mb-[98px] w-full max-w-[480px] mx-auto">
          <input
            className="py-5 font-secondary outline-none pl-6 bg-white rounded-[6px] w-full"
            type="text"
            placeholder="Your business email"
          />
          <button className="px-7 right-2 py-[15px] bg-secondary hover:bg-primary hover:text-white cursor-pointer text-text font-secondary rounded-[6px] absolute">
            Try for free
          </button>
        </Flex>
        <img
          className="absolute bottom-[-206px] left-[47%] transform -translate-x-1/2 w-[1200px]"
          src={bannerLaptop}
          alt=""
        />
      </Container>
    </div>
  );
};

export default Banner;