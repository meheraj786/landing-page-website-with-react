import React from "react";
import Container from "../Container/Container";
import Flex from "../Flex/Flex";
import logo from "../../assets/footerLogo.png";
import plane from "../../assets/plane.png";
import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

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
    <div className="footer pt-[124px]">
      <Container>
        <Flex className="justify-between pb-[86px]">
          <div>
            <img src={logo} alt="" />
            <p className="text-4 text-description w-[263px] mt-[26px] mb-[24px]">
              Build a modern and creative website with Innovate.
            </p>
            <Flex className="gap-[6px]">
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
            <Flex className="justify-between items-start gap-[80px]">
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
                      return <li>{li}</li>;
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
            <p className="w-[285px] mt-[18px] text-description mb-[32px]">
              Subscribe to our newsletter and get many interesting things every
              week
            </p>
            <input
              className="border-1 border-description rounded-md outline-none p-[10px]"
              type="text"
            />
            <button className="px-[10px] py-[10px] bg-primary rounded-md ml-[10px]">
              <img src={plane} alt="" />
            </button>
          </div>
        </Flex>
        <hr className=" border-2 border-description opacity-[50%]" />
        <div className="copyright text-description py-6">
          <p>© 2024 Innovate - All Right Reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
