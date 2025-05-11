import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import img1 from '../../assets/worksImg1.png'
import Button from '../../layout/Button/Button'

const Works = () => {
  const works=[
    {
      img: img1,
      title: "Plan Product Roadmap",
      description: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
      link: "Read More"
    },
    {
      img: img1,
      title: "Plan Product Roadmap",
      description: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
      link: "Read More"
    },
    {
      img: img1,
      title: "Plan Product Roadmap",
      description: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
      link: "Read More"
    },
    {
      img: img1,
      title: "Plan Product Roadmap",
      description: "A product roadmap is a shared source of truth that outlines the vision, direction, priorities",
      link: "Read More"
    },
  ]
  return (
    <div className="works py-[140px]">
      <Container>
        <p className='text-orng text-center'>Our Services</p>
        <h2 className='font-primary text-center text-[46px] mt-[4px] mb-[80px] font-bold  leading-[58px] text-text'>How It Works</h2>
        <Flex className="justify-between">
          {
            works.map((work)=>(
              <div className="group card cursor-pointer hover:bg-primary  border-1 rounded-[20px] text-text border-[#DCE7FE] p-[36px] w-[330px]">
                <img src={work.img} alt="" />
                <h3 className='font-primary text-[22px] group-hover:text-white mt-[26px] mb-[8px] font-bold  leading-[34px] '>{work.title}</h3>
                <p className='font-secondary text-[16px] font-regular mb-[26px] leading-[26px] group-hover:text-white text-description'>{work.description}</p>
                <a className='group-hover:text-white text-blue-900' href="#">{work.link}</a>
              </div>
            ))
          }
        </Flex>
        <div className="button text-center">
        <Button className="bg-white border-primary border-1 text-primary hover:bg-primary hover:text-white mt-[80px] text-center mx-auto">View More</Button>

        </div>
      </Container>

    </div>
  )
}

export default Works