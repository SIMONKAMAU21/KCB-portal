import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Recoverform from './Recoverform'
import AuthWrapper from '../../components/AuthPageWrapper'

const Recoverpassword = () => {
   return (
      <AuthWrapper
         leftChildren={
            <Box>
               <Text fontSize={{base:"20px",md:"45px"}}>Recover your <br /> password. </Text>
               <Text  color='#426E79' w='100%' fontSize={{base:"10px",md:"25px"}}> check your e-mail for activation link</Text>
            </Box>}
         rightChildren={<>
            <Recoverform />
         </>}
      />

   )
}

export default Recoverpassword