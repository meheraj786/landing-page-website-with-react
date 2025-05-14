import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <div className="navbar z-10 font-secondary absolute top-8
    w-full">
    <Container>
      <Flex className="justify-between" >
        <div className="logo ">
          <Logo/>
        </div>
        
        <ul>
          <Flex className="text-white gap-[50px] items-center">
          <li className='cursor-pointer hover:text-gray-300'>Home</li>
          <li className='cursor-pointer hover:text-gray-300'>Features</li>
          <li className='cursor-pointer hover:text-gray-300'>Service</li>
          <li className='cursor-pointer hover:text-gray-300'>Pages</li>
          <li className='cursor-pointer hover:text-gray-300'>Blog</li>
          </Flex>
        </ul>

        <div className="buttons">
          <Flex className="gap-[20px] justify-center">
            <a className='text-white' href="#">Log in</a>
            <button className="bg-secondary font-medium px-12 text-[18px] py-5 rounded-[6px] hover:bg-primary hover:text-white cursor-pointer">Register</button>
          </Flex>
        </div>
      </Flex>
    </Container>

    </div>
  );
};

export default Navbar;
