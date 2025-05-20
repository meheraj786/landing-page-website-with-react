import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import logo from "../../assets/footerLogo.png";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin, FaTelegramPlane  } from "react-icons/fa";

const Footer = () => {
  const listItems = [
    {
      items: ["Product", "Landingpages", "Pricing", "Benifits", "Feature"],
    },
    {
      items: [
        "Company",
        "About",
        "Privacy Policy",
        "Terms & Conditions",
        "Partners",
        "Contact",
      ],
    },
    {
      items: ["Resources", "Guides and resources", "Blog", "Tools", "Support"],
    },
  ];

  return (
    <div className="footer text-center md:text-left pt-[124px]">
      <Container>
        <Flex className="md:justify-between justify-center pb-[86px]">
          <div>
            <img className="mx-auto md:ml-0 md:mr-auto" src={logo} alt="" />
            <p className="text-4 text-description w-[263px] mt-[26px] mb-[24px]">
              Build a modern and creative website with Innovate.
            </p>
            <Flex className="gap-[6px] justify-center md:justify-start mb-9 md:mb-0">
              <div className="text-[#645E76] px-[13px] py-[13px] rounded-full bg-[#EEEEEE] hover:bg-description cursor-pointer hover:text-white">
                <FaGoogle />
              </div>
              <div className="text-[#645E76] px-[13px] py-[13px] rounded-full bg-[#EEEEEE] hover:bg-description cursor-pointer hover:text-white">
                <FaTwitter />
              </div>
              <div className="text-[#645E76] px-[13px] py-[13px] rounded-full bg-[#EEEEEE] hover:bg-description cursor-pointer hover:text-white">
                <FaInstagram />
              </div>
              <div className="text-[#645E76] px-[13px] py-[13px] rounded-full bg-[#EEEEEE] hover:bg-description cursor-pointer hover:text-white">
                <FaLinkedin />
              </div>
            </Flex>
          </div>
          <div>
            <Flex className="md:justify-between items-start md:gap-[80px] gap-[40px] mb-9 md:mb-0 justify-center">
              {listItems.map((items) => {
                return (
                  <ul className="text-description">
                    {items.items.map((li, index) => {
                      if (index == 0) {
                        return (
                          <li className="text-[18px] mb-[20px] font-bold text-text">
                            {li}
                          </li>
                        );
                      }
                      return <li className="cursor-pointer hover:text-text">{li}</li>;
                    })}
                  </ul>
                );
              })}
            </Flex>
          </div>

          <div>
            <h4 className="text-[18px] font-bold text-text">
              Get Latest Updates
            </h4>
            <p className="max-w-[285px] mt-[18px] text-description mb-[32px]">
              Subscribe to our newsletter and get many interesting things every
              week
            </p>
<div className="relative">
<input
              className="border-1 text-[12px] border-[#D2D2D2] rounded-md outline-none pl-[18px] pr-[136px] pt-[12px] pb-[14px]"
              type="text"
              placeholder="Your Email Address"
            />
            <button className="px-[10px] absolute right-[5px] top-[5px] py-[10px] text-white bg-primary rounded-md ml-[10px]">
            <FaTelegramPlane />
            </button>
</div>
          </div>
        </Flex>
        <hr className=" border-1 opacity-[80%] font-secondary border-description" />
        <div className="copyright text-[16px]   text-description py-6">
          <p>© 2024 Innovate - All Right Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
