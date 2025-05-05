import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'

const Navbar = () => {
  return (
    <Container>
      <Flex justifyContent="center" alignItems='center'>
        <div className="logo">
          {/* <img src="" alt="#" /> */}
          <span className="font-bold text-xl">Logo</span>
        </div>
        
        <ul className='flex gap-[50px]'>
          <li>Hello</li>
          <li>World</li>
          <li>Universe</li>
          <li>Magic</li>
          <li>Galaxy</li>
        </ul>

        <div className="buttons">
          <Flex gap='5'>
            <a href="#">Log in</a>
            <button className="bg-blue-500 text-white px-4 py-1 rounded">Register</button>
          </Flex>
        </div>
      </Flex>
    </Container>
  );
};

export default Navbar;
