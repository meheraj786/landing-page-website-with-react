import React from 'react'
import Flex from '../Flex/Flex'
import icon1 from '../../assets/contentIcon1.png'
import icon2 from '../../assets/contentIcon2.png'
import icon3 from '../../assets/contentIcon3.png'
import Container from '../Container/Container'

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
      <div className="stats">
        <Flex>
        <div className="stats-left">

        </div>
        <div className="stats-right">

        </div>
        </Flex>
      </div>
      </Container>
    </div>
  )
}

export default Content