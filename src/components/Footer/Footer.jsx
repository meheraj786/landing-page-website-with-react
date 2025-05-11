import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import logo from '../../assets/footerLogo.png'

const Footer = () => {
  return (
    <div className="footer pt-[124px]">
      <Container>
        <Flex className="justify-between pb-[86px]">
          <div>
            <img src={logo} alt="" />
            <p>Build a modern and creative website with Innovate.</p>
            <Flex>

            </Flex>
          </div>
          <div>
            <Flex className="justify-between items-start gap-[80px]">
              <ul>
                <li>Product</li>
                <li>Landingpages</li>
                <li>Pricing</li>
                <li>Benifits</li>
                <li>Features</li>
              </ul>
              <ul>
                <li>Product</li>
                <li>Landingpages</li>
                <li>Pricing</li>
                <li>Benifits</li>
                <li>Features</li>
              </ul>
              <ul>
                <li>Product</li>
                <li>Landingpages</li>
                <li>Pricing</li>
                <li>Benifits</li>
                <li>Features</li>
              </ul>
              <div>
                <h4>Get Latest Updates</h4>
                <p className='w-[285px]'>Subscribe to our newsletter and get many interesting things every week</p>
                <input type="text" />
              </div>
            </Flex>
          </div>
        </Flex>
        <hr />
        <div className="copyright py-6">
          <p>© 2024 Innovate - All Right Reserved</p>
        </div>
      </Container>
      

    </div>
  )
}

export default Footer