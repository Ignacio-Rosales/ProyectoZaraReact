import React from 'react'
import { Spinner, Flex } from '@chakra-ui/react'
const Loader = () => {
  return (  
    <Flex 
      height="100vh" 
      alignItems="center" 
      justifyContent="center"
      className='container_loader'
    >
      <Spinner size='xl' className='loader' />
    </Flex>
  )
}

export default Loader