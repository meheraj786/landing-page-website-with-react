import React from 'react'
import Flex from '../Flex/Flex'
import Button from '../../layout/Button/Button'
import Container from '../Container/Container'
import icon1 from '../../assets/1.png'
import icon2 from '../../assets/2.png'
import icon3 from '../../assets/3.png'
import icon4 from '../../assets/4.png'
import icon5 from '../../assets/5.png'
import icon6 from '../../assets/6.png'
import icon8 from '../../assets/8.png'
import icon9 from '../../assets/9.png'

const Integrate = () => {
  return (
    <div className="integrate bg-[#F4FAFA] py-[124px] mt-[160px]">
      <Container>
      <Flex className="justify-between gap-0">
        <div className="integrate-left w-[40%]">
          <p className='text-[20px] font-secondary font-medium text-orng'>Integrations</p>
          <h2 className='text-[46px] font-bold mt-[4px] mb-[20px] font-primary leading-[58px] text-text'>Easily integrate with your favorite apps</h2>
          <p className='text-[18px] font-secondary font-bold  mb-[40px] leading-[32px] text-description'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
          <Button className="text-white">Get Started</Button>
        </div>
        <div className="integrate-right w-[50%]">
          <Flex className="justify-center">
          <img className='w-[332px]' src={icon1} alt="" />
          <img className='w-[332px]' src={icon4} alt="" />
          <img className='w-[151px]' src={icon8} alt="" />
          <img className='w-[332px]' src={icon2} alt="" />
          <img className='w-[151px]' src={icon5} alt="" />
          <img className='w-[290px]' src={icon3} alt="" />
          <img className='w-[151px]' src={icon9} alt="" />
          <img className='w-[196px]' src={icon6} alt="" />

          </Flex>


        </div>
      </Flex>

      </Container>
    </div>
  )
}

export default Integrate