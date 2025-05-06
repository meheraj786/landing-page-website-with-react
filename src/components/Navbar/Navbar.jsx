import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import Logo from '../Logo/Logo';

const Navbar = () => {
  return (
    <Container>
      <Flex justifyContent="space-between" alignItems='center'>
        <div className="logo ">
          <Logo/>
        </div>
        
        <ul className='flex gap-[50px] '>
          <li>Hello</li>
          <li>World</li>
          <li>Universe</li>
          <li>Magic</li>
          <li>Galaxy</li>
        </ul>

        <div className="buttons">
          <Flex gap='20px'>
            <a href="#">Log in</a>
            <button className="bg-secondary font-medium px-12 text-[18px] py-5 rounded-[6px]">Register</button>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default Navbar;
