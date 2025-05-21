import React from 'react'
import Flex from '../Flex/Flex'
import icon1 from '../../assets/contentIcon1.png'
import icon2 from '../../assets/contentIcon2.png'
import icon3 from '../../assets/contentIcon3.png'
import rocketIcon from '../../assets/rocketIcon.png'
import lockIcon from '../../assets/lockIcon.png'
import settingIcon from '../../assets/settingIcon.png'
import contentElips from '../../assets/contentElips.png'
import check from '../../assets/check.png'
import subCir from '../../assets/subscribersCircles.png'
import stats from '../../assets/stats.png'
import avatar from '../../assets/avatar.png'
import Container from '../Container/Container'
import Button from "../../layout/Button/Button"
import { IoMdArrowDropup, IoIosCheckboxOutline  } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";



const Content = () => {
  const cards= [
    {
    img: icon1,
    title: "Login or sign up to be able use our platform",
    description:"This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
  },
    {
    img: icon2,
    title: "Connect your website with just a few click",
    description:"Once your website is online, you can configure it, I will show you how to put your website online",
  },
    {
    img: icon3,
    title: "Take some sales data that you want",
    description:"Sell your data directly: The most straightforward method is to sell your data directly to another",
  },
]
const features=[
  {
    img: rocketIcon,
    title: "Fast and Easy to Use",
    description: "Easily to convert API with just a few clicks"
  },
  {
    img: lockIcon,
    title: "Safely Security",
    description: "All customer data is encrypted"
  },
  {
    img: settingIcon,
    title: "Get Organized",
    description: "From lists to boards, organize work your way."
  },
]
  return (
    <div className="content md:pt-[336px] pt-[150px]">
      <Container>
      <Flex className="md:justify-between text-center md:text-left justify-center items-start">
        <h2 className='text-4xl md:text-5xl max-w-[504px] font-primary font-bold text-text leading-[38px] md:leading-[48px] mb-3 md:mb-0 tracking-[-1px]'>How simple is it to use our platform?</h2>
        <p className='text-description max-w-[530px] leading-[32px] tracking-[-1px] text-[16px] md:text-[18px] font-secondary'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
      </Flex>
      <Flex className="mt-[116px] gap-10 md:gap-0 mb-[140px] justify-around">
{
  cards.map((card)=>(
    <>
            <Flex className="flex-col justify-center w-[300px] text-center">
          <img src={card.img} alt="" />
          <h3 className='mt-[26px] leading-[36px] text-2xl text-text font-bold mb-3'>{card.title}</h3>
          <p className='text-description mx-auto w-[300px] leading-[32px] -tracking-[0.25%] tex-[18px]'>{card.description}</p>
        </Flex>
    </>
  ))
}
      </Flex>
      <div className="stats relative">
        <Flex className="justify-center md:justify-between">
        <div className="stats-left">
          <img className='absolute top-[48px] left-[-59px]' src={contentElips} alt="" />
          <div className="box shadow-2xl relative md:w-[447px] pb-[32px] rounded-t-[6px] rounded-r-[6px] border-t-[20px] z-0 px-[34px]  md:pl-[34px] border-[#2290F5] md:ml-[57px] bg-white">
            <div className="subscribers max-w-[357px] h-[138px] top-[48px] shadow-md bg-white py-[18px] px-[22px] mx-auto md:absolute mt-5 md:mt-0 left-[-76px]">
              <p className='font-semibold text-[14px] leading-[18px] text-text'>New Subscribers</p>
              <Flex className="justify-between">
                <div>
                <h2 className='text-text font-primary text-[31px] font-bold leading-[36px] mt-[21px] mb-[5px]'>2010+</h2>
                <span className='text-[#FF7364] font-primary text-[12px] flex items-center leading-[18px]'> <IoMdArrowDropup className='text-[24px] text-[#FF7364]' />
                32% this month</span>
                </div>
                <img src={subCir} alt="" />
              </Flex>
            </div>
            <div className="in-progress text-description max-w-[295px] mx-auto md:mr-auto md:ml-0 md:mt-[216px] mt-[50px]">
              <Flex className="justify-between px-[13px]">
              <p>In Progress</p>
              <Flex className='gap-2'>
              <span>+ </span>
              <span><HiDotsHorizontal />
</span>
              </Flex>
              </Flex>
              <div className="box border-1 mt-[22px] rounded-[6px] border-[#E6E9EF]  shadow-md  py-[18px] px-[13px]">
                <Flex className='justify-between mb-[20px]'><p className='flex items-center gap-[9px]'><IoIosCheckboxOutline /> Customer Experiance Insight</p>
                <span><HiDotsHorizontal />
</span></Flex>
                <span className='px-[19px] py-[2px] bg-blue-500 text-[13px] mr-[22px] rounded-[12px] text-white'>Low</span>
                <span className='px-[10px] py-[2px] bg-orange-500 text-[13px] mr-[22px] rounded-[12px] text-white'>air x</span>
                <Flex className="justify-between mt-[20px]">
                  <div className="flex items-center gap-2">
                    <img src={avatar} alt="" />
                    <p>Starday</p>
                  </div>
                  <Flex className='gap-[12px]'>
                    <span className="border-1 border-description rounded-2xl px-1">50%</span>
                    <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.93829 4.50386C1.93829 3.33536 2.8637 2.35791 4.04195 2.35791H16.8717C18.0499 2.35791 18.9753 3.33536 18.9753 4.50386C18.9753 5.67237 18.0499 6.64982 16.8717 6.64982H5.15871V10.2531H6.96337C7.22348 9.38002 8.01595 8.73047 8.97646 8.73047H13.911C15.0892 8.73047 16.0146 9.70792 16.0146 10.8764C16.0146 12.0449 15.0892 13.0224 13.911 13.0224H8.97646C8.01595 13.0224 7.22348 12.3728 6.96337 11.4997H5.15871V15.2188C5.15871 16.0125 5.77978 16.6257 6.50921 16.6257H6.96337C7.22348 15.7526 8.01595 15.103 8.97646 15.103H13.911C15.0892 15.103 16.0146 16.0805 16.0146 17.249C16.0146 18.4175 15.0892 19.3949 13.911 19.3949H8.97646C8.01595 19.3949 7.22348 18.7454 6.96337 17.8723H6.50921C5.05843 17.8723 3.9121 16.6676 3.9121 15.2188V6.64584C2.79641 6.57715 1.93829 5.62909 1.93829 4.50386ZM4.04195 3.60452C3.58505 3.60452 3.18491 3.9905 3.18491 4.50386C3.18491 5.01723 3.58505 5.40321 4.04195 5.40321H16.8717C17.3286 5.40321 17.7287 5.01723 17.7287 4.50386C17.7287 3.9905 17.3286 3.60452 16.8717 3.60452H4.04195ZM8.97646 9.97709C8.51956 9.97709 8.11941 10.3631 8.11941 10.8764C8.11941 11.3898 8.51956 11.7758 8.97646 11.7758H13.911C14.3679 11.7758 14.768 11.3898 14.768 10.8764C14.768 10.3631 14.3679 9.97709 13.911 9.97709H8.97646ZM8.97646 16.3497C8.51956 16.3497 8.11941 16.7356 8.11941 17.249C8.11941 17.7624 8.51956 18.1483 8.97646 18.1483H13.911C14.3679 18.1483 14.768 17.7624 14.768 17.249C14.768 16.7356 14.3679 16.3497 13.911 16.3497H8.97646Z" fill="#848588"/>
</svg>

                  </Flex>
                </Flex>
              </div>
            </div>
            <div className="in-progress mx-auto md:mr-auto md:ml-0 text-description max-w-[295px] mt-[35px]">
              <Flex className="justify-between px-[13px]">
              <p>Pending</p>
              <Flex className='gap-2'>
              <span>+ </span>
              <span><HiDotsHorizontal />
</span>
              </Flex>
              </Flex>
              <div className="box border-1 mt-[22px] rounded-[6px] border-[#E6E9EF] shadow-md  py-[18px] px-[13px]">
                <Flex className='justify-between mb-[20px]'> <p className='flex items-center gap-[9px]'><IoIosCheckboxOutline /> Customer Experiance Insight</p>
                <span><HiDotsHorizontal />
</span></Flex>
                <span className='px-[19px] py-[2px] bg-blue-500 text-[13px] mr-[22px] rounded-[12px] text-white'>Low</span>
                <span className='px-[10px] py-[2px] bg-orange-500 text-[13px] mr-[22px] rounded-[12px] text-white'>air x</span>
                <Flex className="justify-between mt-[20px]">
                  <div className="flex items-center gap-2">
                    <img src={avatar} alt="" />
                    <p>Starday</p>
                  </div>
                  <div>
                    <span className=""><svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.93829 4.50386C1.93829 3.33536 2.8637 2.35791 4.04195 2.35791H16.8717C18.0499 2.35791 18.9753 3.33536 18.9753 4.50386C18.9753 5.67237 18.0499 6.64982 16.8717 6.64982H5.15871V10.2531H6.96337C7.22348 9.38002 8.01595 8.73047 8.97646 8.73047H13.911C15.0892 8.73047 16.0146 9.70792 16.0146 10.8764C16.0146 12.0449 15.0892 13.0224 13.911 13.0224H8.97646C8.01595 13.0224 7.22348 12.3728 6.96337 11.4997H5.15871V15.2188C5.15871 16.0125 5.77978 16.6257 6.50921 16.6257H6.96337C7.22348 15.7526 8.01595 15.103 8.97646 15.103H13.911C15.0892 15.103 16.0146 16.0805 16.0146 17.249C16.0146 18.4175 15.0892 19.3949 13.911 19.3949H8.97646C8.01595 19.3949 7.22348 18.7454 6.96337 17.8723H6.50921C5.05843 17.8723 3.9121 16.6676 3.9121 15.2188V6.64584C2.79641 6.57715 1.93829 5.62909 1.93829 4.50386ZM4.04195 3.60452C3.58505 3.60452 3.18491 3.9905 3.18491 4.50386C3.18491 5.01723 3.58505 5.40321 4.04195 5.40321H16.8717C17.3286 5.40321 17.7287 5.01723 17.7287 4.50386C17.7287 3.9905 17.3286 3.60452 16.8717 3.60452H4.04195ZM8.97646 9.97709C8.51956 9.97709 8.11941 10.3631 8.11941 10.8764C8.11941 11.3898 8.51956 11.7758 8.97646 11.7758H13.911C14.3679 11.7758 14.768 11.3898 14.768 10.8764C14.768 10.3631 14.3679 9.97709 13.911 9.97709H8.97646ZM8.97646 16.3497C8.51956 16.3497 8.11941 16.7356 8.11941 17.249C8.11941 17.7624 8.51956 18.1483 8.97646 18.1483H13.911C14.3679 18.1483 14.768 17.7624 14.768 17.249C14.768 16.7356 14.3679 16.3497 13.911 16.3497H8.97646Z" fill="#848588"/>
</svg></span>
                  </div>
                </Flex>
              </div>
            </div>
          <div className="total-project my-9 md:my-0 shadow-md md:absolute right-[-190px] z-10 bg-white top-[108px] py-[22px] px-[25px]">
            <h2 className='mb-[24px] text-text font-semibold font-secondary'>Total Project Data</h2>
            <img className='mx-auto' src={stats} alt="" />

          </div>
          <div className="project-notify shadow-md md:absolute right-[-190px] z-10 bg-white top-[368px] py-[22px] px-[25px] text-center">
            <img className="mx-auto" src={check} alt="" />
            <h2 className='max-w-[231px] mx-auto text-description mt-[22px] mb-[16px]'>Your analytics research project is complete</h2>
            <Button className="bg-secondary text-text">Project Notify</Button>

          </div>
          </div>
        </div>
        <div className="stats-right text-center md:text-left mt-[90px] md:mt-0 md:w-[40%]">
          <h2 className='font-primary mb-[64px] font-bold text-text leading-[58px] text-center md:text-left tracking-[-1px] md:text-[46px] text-[36px] max-w-[553px]' >We provide features for your Business</h2>
  <Flex className="md:justify-center justify-center md:gap-x-[96px] gap-x-9 gap-y-[40px] md:items-end">
  {
    features.map((feature)=>(
      <div className="feature-card w-[225px]">
        <img className='mx-auto md:mr-auto md:ml-0' src={feature.img} alt="" />
        <h3 className='mt-[14px] mb-[6px] text-[22px] font-primary font-bold leading-[34px] tracking-[-0.5%] text-text'>{feature.title}</h3>
        <p className='text-[22px] font-secondary text-regular leading-[32px]  text-description'>{feature.description}</p>
      </div>
    ))
  }
  <div className=' w-[225px]'>
  <Button className="text-white">Get Started</Button>
  </div>
  </Flex>
        </div>
        </Flex>
      </div>
      </Container>
    </div>
  )
}

export default Content