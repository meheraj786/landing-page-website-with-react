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
    <div className="integrate relative bg-[#F4FAFA] py-[124px] mt-[160px]">
      <div className="absolute bottom-[23px] left-[100px]">
      <svg width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="92.2832" y="37.0952" width="25.3333" height="25.3333" fill="#E4F7F7"/>
<rect x="120.33" y="19" width="16.2857" height="16.2857" fill="#E4F7F7"/>
<path d="M76 -3.32207e-06C60.9686 -2.66502e-06 46.2748 4.45732 33.7767 12.8083C21.2785 21.1593 11.5374 33.0289 5.78515 46.9161C0.0328914 60.8032 -1.47216 76.0843 1.46032 90.8269C4.39279 105.569 11.6311 119.111 22.2599 129.74C32.8887 140.369 46.4306 147.607 61.1731 150.54C75.9157 153.472 91.1968 151.967 105.084 146.215C118.971 140.463 130.841 130.721 139.192 118.223C147.543 105.725 152 91.0314 152 76L76 76L76 -3.32207e-06Z" fill="#E4F7F7"/>
</svg>

      </div>
      <Container>
      <Flex className="justify-between gap-0">
        <div className="integrate-left w-[40%]">
          <p className='text-[20px] font-secondary font-medium text-orng'>Integrations</p>
          <h2 className='text-[46px] font-bold mt-[4px] mb-[20px] font-primary leading-[58px] text-text'>Easily integrate with your favorite apps</h2>
          <p className='text-[18px] font-secondary font-bold  mb-[40px] leading-[32px] text-description'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
          <Button className="text-white">Get Started</Button>
        </div>
        <div className="integrate-right w-[697px]">
          <Flex className="justify-between gap-y-[35px]">
            <div className='px-[65px] py-[45px] bg-white shadow-md rounded-[12px]'>
          <img className='w-[202px]' src={icon1} alt="" />
            </div>
            <div className='px-[88px] py-[48px] bg-white shadow-md rounded-[12px]'>
          <img className='w-[155px]' src={icon2} alt="" />
            </div>
            <div className="py-[45px] px-[30px] bg-white shadow-md rounded-[12px]">
          <img className='w-[90px]' src={icon3} alt="" />
            </div>
            <div className="px-[80px] py-[50px] bg-white shadow-md rounded-[12px]">
          <img className='w-[174px]' src={icon4} alt="" />
            </div>
            <div className="px-[38px] py-[33px] bg-white shadow-md rounded-[12px]">
          <img className='w-[76px]' src={icon5} alt="" />
            </div>
            <div className="px-[28px] py-[49px] bg-white shadow-md rounded-[12px]">
          <img className='w-[277px]' src={icon6} alt="" />
            </div>
            <div className="px-[38px] py-[33px] bg-white shadow-md rounded-[12px]">
          <img className='w-[76px]' src={icon8} alt="" />
            </div>
            <div className="px-[8px] py-[54px] bg-white shadow-md rounded-[12px]">
          <img className='w-[166px]' src={icon9} alt="" />
            </div>


          </Flex>


        </div>
      </Flex>

      </Container>
    </div>
  )
}

export default Integrate