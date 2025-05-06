import React from 'react'
import Container from '../Container/Container'
import Flex from '../Flex/Flex'

const Banner = () => {
  return (
    <div className='banner pt-[195px]'>
      <Container>
        <Flex flexDirection='column'>
        <h1>Get your work done with Management Tool</h1>
        <p>The world's first project management platform that connects everything</p>
        </Flex>
      </Container>
    </div>
  )
}

export default Banner