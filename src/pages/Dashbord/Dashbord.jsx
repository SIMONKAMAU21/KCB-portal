import React from 'react'
import PageWrapper from '../../components/RoutesPageWrapper'
import { Box, Text } from '@chakra-ui/react'
import Overall from '../Reports/Overall'

const Dashbord = () => {
  return (
   <PageWrapper
   rightChildren={<>
   <Box w='100%'>
    <Overall/>
   </Box>
   </>}
   />
  )
}

export default Dashbord