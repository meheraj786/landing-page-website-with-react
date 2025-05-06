import React from 'react';
import Container from '../Container/Container';
import Flex from '../Flex/Flex';
// import bannerBg from "../../assets/bannerBg.png"

const Banner = () => {
  return (
    <div className='bg-[url(assets/bannerBg.png)] py-[200px]  bg-cover bg-center bg-no-repeat'>
      <Container>
        <Flex flexDirection='column'>
          <h1>Get your work done with Management Tool</h1>
          <p>The world's first project management platform that connects everything</p>
        </Flex>
      </Container>
    </div>

  );
};

export default Banner;