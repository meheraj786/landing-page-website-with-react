import React from 'react'
import Flex from '../Flex/Flex'
import icon1 from '../../assets/contentIcon1.png'
import Container from '../Container/Container'

const Content = () => {
  const cards= [
    {
    img: {icon1},
    title: "Login or sign up to be able use our platform",
    description:"This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
  },
    {
    img: {icon1},
    title: "Login or sign up to be able use our platform",
    description:"This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
  },
    {
    img: {icon1},
    title: "Login or sign up to be able use our platform",
    description:"This quickstart shows you how to use Identity Platform to sign in a user with an email and password. ",
  },
]
  return (
    <div className="content pt-[336px]">
      <Container>
      <Flex className="justify-between">
        <h2>How simple is it to use our platform?</h2>
        <p>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
      </Flex>
      <Flex className="mt-[116px] mb-[160px] justify-around">
{
  cards.map((card)=>(
    <>
            <Flex className="flex-col justify-center w-[300px] text-center">
          <img src={card.img} alt="" />
          <h3 className='mt-[26px] mb-3'>{card.title}</h3>
          <p>{card.description}</p>
        </Flex>
    </>
  ))
}
      </Flex>
      </Container>
    </div>
  )
}

export default Content