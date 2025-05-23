import React from 'react';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import bannerLaptop from '../../assets/bannerLaptop.png';

const Banner = () => {
  return (
    <div className="relative bg-[url(assets/banner.png)] pt-[195px] md:pb-[396px] pb-[250px] bg-cover bg-center bg-no-repeat">
      <Container>
        <Flex className="flex-col text-white justify-center">
          <h1 className="md:max-w-[796px] font-primary md:text-[56px] text-[36px] font-bold text-center mb-5">
            Get your work done with Management Tool
          </h1>
          <p className="md:w-[467px] w-[300px] font-secondary md:text-[18px] text-[14px] font-bold text-center">
            The world's first project management platform that connects everything
          </p>
        </Flex>
        <Flex className="relative mt-8 mb-[60px] md:mb-[98px] px-9 md:px-0 md:max-w-[480px] mx-auto">
          <input
            className="py-5 font-secondary outline-none pl-6 bg-white rounded-[6px] w-full"
            type="text"
            placeholder="Your business email"
          />
          <button className="px-7 md:right-2 right-10 py-[15px] bg-secondary hover:bg-primary hover:text-white cursor-pointer text-text font-secondary rounded-[6px] absolute">
            Try for free
          </button>
        </Flex>
        <img
          className="absolute md:bottom-[-236px] left-[44%] md:left-[47%] transform -translate-x-1/2 w-[1200px]"
          src={bannerLaptop}
          alt=""
        />
      </Container>
    </div>
  );
};

export default Banner;