import React, { useState } from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import Logo from '../Logo/Logo';
import { IoMenuSharp } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";



const Navbar = () => {
  const [show, setShow]= useState(false)

  return (
    <div className="navbar bg-primary md:bg-transparent fixed z-[9999] font-secondary md:absolute md:py-8
    w-full">
    <Container>
      <Flex className="justify-between w-full py-9 md:py-0 inline-block md:flex md:items-center items-start md:flex-row md:bg-[transparent]" >
        <Flex className="justify-between px-3 items-center">
          <Logo/>
          {show ? <RxCross2 onClick={()=>setShow(!show)}  className='md:hidden text-4xl text-white' />
: <IoMenuSharp onClick={()=>setShow(!show)} className='md:hidden text-4xl text-white'/>}
        
        </Flex>
        {
          show && (
            <div className=' py-3'>
                    <ul>
          <Flex className="text-white md:flex-row flex-col gap-5 md:gap-[50px] mx-auto items-center mb-[40px] md:mb-0 md:items-start">
          <li className='cursor-pointer hover:text-gray-300'>Home</li>
          <li className='cursor-pointer hover:text-gray-300'>Features</li>
          <li className='cursor-pointer hover:text-gray-300'>Service</li>
          <li className='cursor-pointer hover:text-gray-300'>Pages</li>
          <li className='cursor-pointer hover:text-gray-300'>Blog</li>
          </Flex>
        </ul>
        <hr className='text-white mb-5 w-1/2 mx-auto opacity-60'/>

        <div className="buttons">
          <Flex className="gap-[20px]  pb-5 flex-col-reverse justify-center">
            <a className='text-white' href="#">Log in</a>
            <button className="bg-secondary font-medium px-8 text-[18px] py-3 rounded-[6px] hover:bg-primary hover:text-white cursor-pointer">Register</button>
          </Flex>
        </div>
        </div>
          )
        }


        
        <ul>
          <Flex className="text-white hidden md:flex md:flex-row flex-col gap-5 md:gap-[50px] mx-auto items-center mb-[40px] md:mb-0 md:items-start">
          <li className='cursor-pointer hover:text-gray-300'>Home</li>
          <li className='cursor-pointer hover:text-gray-300'>Features</li>
          <li className='cursor-pointer hover:text-gray-300'>Service</li>
          <li className='cursor-pointer hover:text-gray-300'>Pages</li>
          <li className='cursor-pointer hover:text-gray-300'>Blog</li>
          </Flex>
        </ul>

        <div className="buttons hidden md:flex">
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
