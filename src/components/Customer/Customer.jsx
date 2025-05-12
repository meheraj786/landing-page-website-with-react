import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import img from '../../assets/customerImg.png'

const Customer = () => {
  return (
    <div className="customer text-white">
      <Container>
        <div className="bg-[url(assets/customerBg.png)] bg-cover bg-center bg-no-repeat pt-[85px] rounded-4xl">
        <Flex className="justify-between">
          <div className="customer-left pl-[50px] w-[50%]">
            <img src={img} alt="" />
          </div>
          <div className="customer-right mx-auto pb-[85px]  w-[40%]">
            <h2 className='text-[44px] font-primary font-bold mb-[64px]'>Trusted by 35,000+ happy customers.</h2>
            <Flex className="justify-between">
              <div className="box w-[176px]">
                <h2 className='text-[44px] font-primary font-black mb-[12px]'>720+</h2>
                <p className='opacity-[70%] text-[18px] font-medium leading-[32px]'>Over 500 business powered with us</p>
              </div>
              <div className="box w-[176px]">
              <h2 className='text-[44px] font-primary font-black mb-[12px]'>4.9</h2>
              <p className='opacity-[70%] text-[18px] font-medium leading-[32px]'>Rating on google <br /> play and app store</p>
              </div>
              <div className="box w-[176px]">
              <h2 className='text-[44px] font-primary font-black mb-[12px]'>200+</h2>
              <p className='opacity-[70%] text-[18px] font-medium leading-[32px]'>Easily integrate with your favorite apps</p>
              </div>
            </Flex>
          </div>
        </Flex>

        </div>
      </Container>
    </div>
  )
}

export default Customer