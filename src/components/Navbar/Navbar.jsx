import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'

const Navbar = () => {
  return (
   <Container>
      <ul className="flex">
        <li>Hello</li>
        <li>world</li>
        <li>universe</li>
        <li>magic</li>
        <li>galaxy</li>
      </ul>
      <Flex direction="row" gap="0px" justify="center" items="start">


      <p>Hello</p>
      <p>World</p>
      <p>Universe</p>
      </Flex>
   </Container>
  )
}

export default Navbar