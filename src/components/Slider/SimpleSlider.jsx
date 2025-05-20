import stars from '../../assets/testimonialStars.png'
import Flex from "../Flex/Flex";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow
// Next Arrow
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} !hidden md:!flex items-center justify-center bg-[#001F3F] rounded-full !right-[-40px] top-1/2 transform -translate-y-1/2 absolute`}
      style={{ width: "40px", display:'flex' ,background:"#3639A4", height: "40px", zIndex: 10 }}
    >
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      onClick={onClick}
      className={`${className} hidden sm:flex items-center justify-center bg-[#001F3F] rounded-full left-[-20px] top-1/2 transform -translate-y-1/2 absolute`}
      style={{ width: "40px", display:'flex' ,background:"#3639A4", height: "40px", zIndex: 10 }}
    >
      <svg
        className="w-4 h-4 text-white"
        fill="none"
        stroke="currentColor"
        strokeWidth={3}
        viewBox="0 0 24 24"
      >
        <path d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );
}



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const format = [
    {
      content: (
        <div className="pt-[70px] rounded-[20px]">
          <div className="review relative rounded-[20px] bg-white p-5 pt-[50px] md:pt-0 md:p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className="text-description text-[22px] leading-[44px] md:w-[567px] font-secondary">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 1
            </p>
  
            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className="text-6 text-text font-bold font-primary leading-[36px] mb-[4px]">SuperMan</h3>
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
          <div className="review relative rounded-[20px] bg-white p-5 pt-[50px] md:pt-0 md:p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className="text-description text-[22px] leading-[44px] md:w-[567px] font-secondary">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 2
            </p>
  
            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className="text-6 text-text font-bold font-primary leading-[36px] mb-[4px]">BateMan</h3>
                <p className="text-4 text-description font-regular font-secondary leading-[26px]">Senior</p>
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
          <div className="review relative rounded-[20px] bg-white p-5 pt-[50px] md:pt-0 md:p-[50px]">
            <div className="circle w-[124px] h-[124px] bg-[#C4C4C4] border-10 border-[#F7F7FC] absolute top-[-80px] z-10 left-[48px] rounded-full"></div>
            <p className="text-description text-[22px] leading-[44px] md:w-[567px] font-secondary">
              “Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. 3
            </p>
  
            <Flex className="justify-between mt-[37px]">
              <div>
                <h3 className="text-6 text-text font-bold font-primary leading-[36px] mb-[4px]">SpiderMan</h3>
                <p className="text-4 text-description font-regular font-secondary leading-[26px]">Web Developer</p>
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