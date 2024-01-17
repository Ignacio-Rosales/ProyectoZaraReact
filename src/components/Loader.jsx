import React from 'react'
import { Stack, Spinner } from '@chakra-ui/react'
const Loader = () => {
  return (  
    <Stack direction='row' spacing={4}>
        <Spinner size='xl' />
    </Stack>
  )
}

export default Loader