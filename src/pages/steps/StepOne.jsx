import React from 'react'
import { Box,  Text } from '@chakra-ui/react'
import Stepone from '../../components/loginSidebar/Stepone'
import AuthWrapper from '../../components/AuthPageWrapper'

const StepOne = () => {
  return (
    
    <AuthWrapper
    
    leftChildren={
   <Box  > 
       <Text  fontSize='45px'>Just a few clicks <br /> away from <br /> accessing the <br /> Simba portal </Text>
      <Text mt='20px' color='#426E79' w='100%'>View recycling statements, interim statements, loan <br />statements, and query records related to your KCB <br />Bank account</Text>
   </Box>
    }
    rightChildren={
      <Stepone/>
    }
    />
  
  )
}

export default StepOne