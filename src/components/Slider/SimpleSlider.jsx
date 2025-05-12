import stars from '../../assets/testimonialStars.png'
import Flex from "../Flex/Flex";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  const format = [
    {
      content: (
        <div className="h-[426px] pt-[70px]">
          <div className="review relative rounded-[20px] bg-white p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className="text-description text-[22px] leading-[44px] w-[567px]">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 1
            </p>
  
            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className="text-6 text-text font-bold font-primary leading-[36px] mb-[4px]">Robert Fox</h3>
                <p className="text-4 text-description font-regular font-secondary leading-[26px]">Digital Marketer</p>
              </div>
              <img src={stars} alt="Rating stars" />
            </Flex>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[426px] pt-[70px]">
          <div className="review relative rounded-[20px] bg-white p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className="text-description text-[22px] leading-[44px] w-[567px]">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 2
            </p>
  
            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className="text-6 text-text font-bold font-primary leading-[36px] mb-[4px]">Robert Fox</h3>
                <p className="text-4 text-description font-regular font-secondary leading-[26px]">Digital Marketer</p>
              </div>
              <img src={stars} alt="Rating stars" />
            </Flex>
          </div>
        </div>
      ),
    },
    {
      content: (
        <div className="h-[426px] pt-[70px]">
          <div className="review relative rounded-[20px] bg-white p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className="text-description text-[22px] leading-[44px] w-[567px]">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 3
            </p>
  
            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className="text-6 text-text font-bold font-primary leading-[36px] mb-[4px]">Robert Fox</h3>
                <p className="text-4 text-description font-regular font-secondary leading-[26px]">Digital Marketer</p>
              </div>
              <img src={stars} alt="Rating stars" />
            </Flex>
          </div>
        </div>
      ),
    },
  ];
  return (
    <Slider {...settings}>
      {/* <div className='h-[426px] pt-[70px]' >
                  <div className="review relative rounded-[20px] bg-white p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div>
      </div>
      <div className='h-[426px] pt-[70px]' >
                  <div className="review relative rounded-[20px] bg-white p-[60px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div>
      </div>
      <div className='h-[426px] pt-[70px]' >
                  <div className="review relative rounded-[20px] bg-white p-[60px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div>
      </div>
      <div className='h-[426px] pt-[70px]' >
                  <div className="review relative rounded-[20px] bg-white p-[60px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div>
      </div>
      <div className='h-[426px] pt-[70px]' >
                  <div className="review relative rounded-[20px] bg-white p-[60px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div>
      </div>
      <div className='h-[426px] pt-[70px]' >
                  <div className="review relative rounded-[20px] bg-white p-[60px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] left-[48px] rounded-full"></div>
            <p className='text-description text-[22px] leading-[44px] w-[567px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>

            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className='text-6  text-text font-bold font-primary leading-[36px] mb-[4px]'>Robert Fox</h3>
                <p className='text-4 text-description font-regular font-secondary leading-[26px]'> Digital Marketer</p>
              </div>
              <img src={stars} alt="" />
            </Flex>

          </div>
      </div> */}
      {
        format.map((item)=>(
          <div>{item.content}</div>
        ))
      }
    </Slider>
  );
}