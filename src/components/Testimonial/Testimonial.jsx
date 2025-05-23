import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import Button from '../../layout/Button/Button'
// import stars from '../../assets/testimonialStars.png'
import icons from '../../assets/testimonialIcons.png'
import smallStar from '../../assets/smallStars.png'
import SimpleSlider from '../Slider/SimpleSlider'

const Testimonial = () => {
  return (
    <div className="testimonial md:py-[200px] py-[100px] bg-[#F4FAFA]">
      <Container>
        <Flex className="justify-between flex-col md:flex-row">
        <div className="testimonial-left text-center md:text-left md:w-[40%]">
          <h2 className='text-text font-primary  leading-[58px] md:text-[46px] text-[36px] font-bold'>What they are talking
          about us?</h2>
          <p className='text-description max-w-[503px] mt-[20px] mx-auto md:mr-auto md:ml-0 mb-[40px]'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
          <Button className="text-white">Get Started</Button>
          <Flex className="gap-8 justify-center md:justify-start md:mt-[80px] my-9">
            <div>
              <img src={icons} alt="" />
            </div>
            <div>
              <p className='flex relative gap-3 font-black text-6 font-primary after:absolute after:w-[2px] after:rounded-full after:h-[16px] after:bg-[#DADBE2] after:top-[50%] after:right-[71%] after:-translate-y-[50%] after:-translate-x-[50%] after- text-[#52C5B6]'>4.5 <span className='flex items-center'><img src={smallStar} alt="" /></span>
              </p>
              <p className='text-description font-secondary'>280k Total Review</p>
            </div>
          </Flex>
        </div>
        <div className="testimonial-right md:w-[50%] mt-[80px] md:mt-0 w-full">
          {/* <div className="review relative rounded-[20px] bg-white p-[60px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div> */}
          <SimpleSlider/>

        </div>
        </Flex>
      </Container>

    </div>
  )
}

export default Testimonial