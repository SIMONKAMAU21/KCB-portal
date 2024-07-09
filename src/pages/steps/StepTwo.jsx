import { Box, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import Steptwo from '../../components/loginSidebar/Steptwo'
import AuthWrapper from '../../components/AuthPageWrapper'

const StepTwo = () => {
   return (
      <AuthWrapper
         leftChildren={
            <Box w='100%' >
               <Text fontSize={{base:"20px",md:"45px"}}>Just a few clicks <br /> away from <br /> accessing the <br /> Simba portal </Text>
               <Text mt='20px' color='#426E79' w='100%'fontSize={{base:"12px",md:"none"}}>View recycling statements, interim statements, loan <br />statements, and query records related to your KCB <br />Bank account</Text>
            </Box>
         }
         rightChildren={<>
            <Steptwo  />
         </>}
      />


   )
}

export default StepTwo