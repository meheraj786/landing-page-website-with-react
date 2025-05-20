import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import icon1 from '../../assets/pricingIcon1.png'
import icon2 from '../../assets/pricingIcon2.png'
import icon3 from '../../assets/pricingIcon3.png'
import check from '../../assets/checkIcon.png'
import Button from '../../layout/Button/Button'

const Pricing = () => {
  const prices=[
    {
      icon: icon1,
      option: "Personal",
      pricing: "$10/mth",
      save: " (save 20%)",
      list: ["Calender View", "Calender View", "Calender View", "Calender View", "Calender View",]
    },
    {
      icon: icon2,
      option: "Team",
      pricing: "$25/mth",
      save: " (save 35%)",
      list: ["Timeline Review", "Custome feilds", "Custom Templates", "Task Dependencies", "Milestones Manage",]
    },
    {
      icon: icon3,
      option: "Enterprise",
      pricing: "$50/mth",
      save: " (save 40%)",
      list: ["Data export & deletion", "Block native integrations", "Custom branding", "Lock custom fields", "Priority support",]
    },
  ]
  return (
    <div className="pricing py-[140px]">
      <Container>
        <h2 className='text-center md:text-[46px] text-[36px] font-primary text-text font-bold leading-[58px] md:w-[624px] mx-auto'>Pricing Designed To Fit Your Business</h2>
        <p className='text-center text-[20px] md:text-[24px] font-primary text-[#3639A4] font-bold leading-[100%] mt-[40px] mb-[77px]'>Monthly</p>
        <Flex className="justify-between">
          {
            prices.map((price)=>(
              <div className="box px-[50px] mb-5 md:mb-0 mx-auto group hover:bg-primary  py-10 md:px-[60px] border-1 border-[#DCE7FE] rounded-[20px] text-center">
                <img className='mx-auto' src={price.icon} alt="" />
                <p className='font-primary text-[24px] group-hover:text-white leading-[54px] font-bold text-primary mt-[32px] mb-[2px]'>{price.option}</p>
                <h2 className='font-primary md:text-[44px] text-[34px] group-hover:text-white leading-[36px] font-bold text-text'>{price.pricing}</h2>
                <p className='font-secondary text-[18px] group-hover:text-white leading-[18px] font-medium text-description mt-[14px] mb-[40px]'>Annual pricing <span className='text-primary group-hover:text-secondary'>{price.save}</span>
                  </p>
                <ul className='md:text-left md:pl-0 pl-5  mb-[40px] '>
                  {
                    price.list.map((item)=>(
                      <li className='flex  items-center gap-[22px] mb-[26px] group-hover:text-white text-description'><span ><img src={check} className='px-[5px] bg-[#F4EBFF]  py-[7px] rounded-full' alt="" /></span>{item}</li>
                    ))
                  }
                </ul>
                <Button className="md:px-[105px] py-[20px] text-white group-hover:bg-secondary group-hover:text-text">Purchase Now</Button>
              </div>
            ))
          }
        </Flex>
      </Container>

    </div>
  )
}

export default Pricing