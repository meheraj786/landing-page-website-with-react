import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import logo from '../../assets/footerLogo.png'
import sociaIcons from '../../assets/socialMediaIcons.png'
import plane from '../../assets/plane.png'

const Footer = () => {
  return (
    <div className="footer pt-[124px]">
      <Container>
        <Flex className="justify-between pb-[86px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-4 text-description w-[263px] mt-[26px] mb-[24px]'>Build a modern and creative website with Innovate.</p>
            <img src={sociaIcons} alt="" />
          </div>
          <div>
            <Flex className="justify-between items-start gap-[80px]">
              <ul className='text-description'>
                <li className='text-[18px] mb-[20px] font-bold text-text'>Product</li>
                <li>Landingpages</li>
                <li>Pricing</li>
                <li>Benifits</li>
                <li>Features</li>
              </ul>
              <ul className='text-description'>
                <li className='text-[18px] mb-[20px] font-bold text-text'>Product</li>
                <li>Landingpages</li>
                <li>Pricing</li>
                <li>Benifits</li>
                <li>Features</li>
              </ul>
              <ul className='text-description'>
                <li className='text-[18px] mb-[20px] font-bold text-text'>Product</li>
                <li>Landingpages</li>
                <li>Pricing</li>
                <li>Benifits</li>
                <li>Features</li>
              </ul>
              <div>
                <h4 className='text-[18px] font-bold text-text'>Get Latest Updates</h4>
                <p className='w-[285px] mt-[18px] text-description mb-[32px]'>Subscribe to our newsletter and get many interesting things every week</p>
                <input className='border-1 border-description rounded-md outline-none p-[10px]' type="text" />
                <button className='px-[10px] py-[10px] bg-primary rounded-md ml-[10px]'><img src={plane} alt="" /></button>
              </div>
            </Flex>
          </div>
        </Flex>
        <hr className=' border-2 border-description opacity-[50%]'/>
        <div className="copyright text-description py-6">
          <p>© 2024 Innovate - All Right Reserved</p>
        </div>
      </Container>
      

    </div>
  )
}

export default Footer