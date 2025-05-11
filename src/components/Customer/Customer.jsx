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
          <div className="customer-right mx-auto w-[40%]">
            <h2 className='text-[44px] font-primary font-bold mb-[64px]'>Trusted by 35,000+ happy customers.</h2>
            <Flex>
              <div className="box w-[176px]">
                <h2 className='text-[44px] font-primary font-bold mb-[12px]'>720+</h2>
                <p className='opacity-[70%]'>Over 500 business powered with us</p>
              </div>
              <div className="box w-[176px]">
              <h2 className='text-[44px] font-primary font-bold mb-[12px]'>720+</h2>
              <p className='opacity-[70%]'>Over 500 business powered with us</p>
              </div>
              <div className="box w-[176px]">
              <h2 className='text-[44px] font-primary font-bold mb-[12px]'>720+</h2>
              <p className='opacity-[70%]'>Over 500 business powered with us</p>
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