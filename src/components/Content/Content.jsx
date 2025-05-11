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
import Container from '../Container/Container'
import Button from "../../layout/Button/Button"

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
    <div className="content pt-[336px]">
      <Container>
      <Flex className="justify-between items-start">
        <h2 className='text-5xl w-[504px] font-primary font-bold leading-[58px] tracking-[-1px]'>How simple is it to use our platform?</h2>
        <p className='text-description w-[530px] leading-[32px] tracking-[-1px] text-[18px] font-secondary'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
      </Flex>
      <Flex className="mt-[116px] mb-[160px] justify-around">
{
  cards.map((card)=>(
    <>
            <Flex className="flex-col justify-center w-[300px] text-center">
          <img src={card.img} alt="" />
          <h3 className='mt-[26px] leading-[36px] text-2xl text-text font-bold mb-3'>{card.title}</h3>
          <p className='text-description mx-auto w-[300px] leading-[32px] tracking-[-0.25%] text-1xl'>{card.description}</p>
        </Flex>
    </>
  ))
}
      </Flex>
      <div className="stats relative">
        <Flex className="justify-between">
        <div className="stats-left">
          <img className='absolute top-[48px] left-[-59px]' src={contentElips} alt="" />
          <div className="box relative w-[447px] h-[651px] rounded-t-[6px] rounded-r-[6px] border-t-[20px] z-0  pl-[34px] border-[#2290F5] ml-[57px] bg-white">
            <div className="subscribers w-[357px] h-[138px] top-[48px] shadow-md bg-white py-[18px] px-[22px] absolute left-[-76px]">
              <p className='font-semibold text-[14px] leading-[18px] text-text'>New Subscribers</p>
              <Flex className="justify-between">
                <div>
                <h2 className='text-text font-primary text-[31px] font-bold leading-[36px] mt-[21px] mb-[5px]'>2010+</h2>
                <span className='text-[#FF7364] font-primary text-[12px] leading-[18px]'>32% this month</span>
                </div>
                <img src={subCir} alt="" />
              </Flex>
            </div>
            <div className="in-progress text-description w-[295px] mt-[216px]">
              <Flex className="justify-between px-[13px]">
              <p>In Progress</p>
              <div>
              <span>+</span>
              <span>---</span>
              </div>
              </Flex>
              <hr />
              <div className="box border-1 mt-[22px] rounded-[6px] border-[#E6E9EF]  h-[138px] shadow-md  py-[18px] px-[13px]">
                <p className='mb-[20px]'>Customer Experiance Insight <span>---</span></p>
                <span className='px-[19px] py-[2px] bg-blue-500 text-[13px] mr-[22px] rounded-[12px] text-white'>Low</span>
                <span className='px-[10px] py-[2px] bg-orange-500 text-[13px] mr-[22px] rounded-[12px] text-white'>air x</span>
                <Flex className="justify-between mt-[20px]">
                  <div>
                    <img src="" alt="" />
                    <p>Starday</p>
                  </div>
                  <div>
                    <span>50%</span>
                    <img src="" alt="" />
                  </div>
                </Flex>
              </div>
            </div>
            <div className="in-progress text-description w-[295px] mt-[35px]">
              <Flex className="justify-between px-[13px]">
              <p>In Progress</p>
              <div>
              <span>+</span>
              <span>---</span>
              </div>
              </Flex>
              <hr />
              <div className="box border-1 mt-[22px] rounded-[6px] border-[#E6E9EF]  h-[138px] shadow-md  py-[18px] px-[13px]">
                <p className='mb-[20px]'>Customer Experiance Insight <span>---</span></p>
                <span className='px-[19px] py-[2px] bg-blue-500 text-[13px] mr-[22px] rounded-[12px] text-white'>Low</span>
                <span className='px-[10px] py-[2px] bg-orange-500 text-[13px] mr-[22px] rounded-[12px] text-white'>air x</span>
                <Flex className="justify-between mt-[20px]">
                  <div>
                    <img src="" alt="" />
                    <p>Starday</p>
                  </div>
                  <div>
                    <span>50%</span>
                    <img src="" alt="" />
                  </div>
                </Flex>
              </div>
            </div>
          <div className="total-project shadow-md absolute right-[-190px] z-10 bg-white top-[108px] py-[22px] px-[25px]">
            <h2 className='mb-[24px]'>Total Project Data</h2>
            <img src={stats} alt="" />

          </div>
          <div className="project-notify shadow-md absolute right-[-190px] z-10 bg-white top-[368px] py-[22px] px-[25px] text-center">
            <img className="mx-auto" src={check} alt="" />
            <h2 className='w-[231px] text-description mt-[22px] mb-[16px]'>Your analytics research project is complete</h2>
            <Button className="bg-secondary text-black">Project Notify</Button>

          </div>
          </div>
        </div>
        <div className="stats-right w-[40%]">
          <h2 className='font-primary mb-[64px] text-bold text-text leading-[58px] tracking-[-1px] text-[46px] w-[553px]' >We provide features for your Business</h2>
  <Flex className="justify-center gap-x-[96px] gap-y-[40px] items-end">
  {
    features.map((feature)=>(
      <div className="feature-card w-[225px]">
        <img src={feature.img} alt="" />
        <h3 className='mt-[14px] mb-[6px] text-[22px] font-primary font-bold leading-[34px] tracking-[-0.5%] text-text'>{feature.title}</h3>
        <p className='text-[22px] font-secondary font-regular leading-[32px]  text-description'>{feature.description}</p>
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