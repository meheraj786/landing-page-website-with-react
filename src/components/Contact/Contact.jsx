import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'
import Button from '../../layout/Button/Button'

const Contact = () => {
  return (
    <div className="contact pt-[160px]">
      <Container>
        <div className='bg-[url(assets/contactBg.png)] rounded-3xl bg-cover bg-center bg-no-repeat p-[50px] md:p-[100px]'>
        <Flex className="justify-between">
          <h2 className='font-primary text-[36px] md:text-[46px] font-bold mb-[50px] md:mb-0 md:leading-[58px] text-white max-w-[577px]'>Don’t find the answer? contact us for any query.</h2>
          <Button className="bg-secondary">Contact Us</Button>

        </Flex>

        </div>
      </Container>

    </div>
  )
}

export default Contact