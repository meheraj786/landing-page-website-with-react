import React from 'react';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';
import laptop from '../../assets/bannerLaptop.png'

const Banner = () => {
  return (
    <div className='bg-[url(assets/bannerBg.png)] py-[200px]  bg-cover bg-center bg-no-repeat'>
      <Container>
        <Flex className="flex-col text-white justify-center items-center">
          <h1 className='w-[796px] text-[56px] font-bold text-center mb-5'>Get your work done with Management Tool</h1>
          <p className='w-[467px] text-[18px] text-center'>The world's first project management platform that connects everything</p>
        </Flex>
        <Flex className="relative mt-8 mb-[98px] w-[480px] mx-auto">
          <input className='py-5 outline-none pl-6 bg-white rounded-[6px] w-[480px]' type="text" placeholder='Your business email' />
          <button className='px-7 right-2 py-[15px] bg-secondary text-text rounded-[6px] absolute'>Try for free</button>
        </Flex>
        <div className="img">
          <img className='w-[1200px] me-auto' src={laptop} alt="" />

        </div>
      </Container>
    </div>

  );
};

export default Banner;