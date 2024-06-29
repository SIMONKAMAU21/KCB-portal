import { Box, Button, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Recoverform = () => {
  const navigation = useNavigate()

  const handleBack = () => {
    navigation('/login')
  }
  const handlesucces=()=>{
    navigation('/success')
  }
  return (
    <Box h="100vh" w="80%" display="flex" mt='140px'>
      <VStack gap='60px'>
        <Box w='100%' >
          <Heading fontSize='28px' mb='35px'>Reset Password</Heading>
          <Text>
            we will send you a password reset link connected to <br /> your existing account
          </Text>
        </Box>

        <Box w='100%' gap='70px'>
          <Box  >
            <Text mb='10px'>your email</Text>
            <Input placeholder='Enter your email' bg='white'/>
          </Box>
          <Box  >
            <HStack display='flex' justifyContent='space-between' mt='30px' fontSize='20px' >
              <Text onClick={handleBack} fontWeight='bold' cursor='pointer' color='#CDCDCF'>BACK</Text>
              <Button color='white' bg='#82BA26' onClick={handlesucces}>RESET PASSWORD</Button>
            </HStack>
          </Box>
        </Box>
      </VStack>
    </Box>
  )
}

export default Recoverform