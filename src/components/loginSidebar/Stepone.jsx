import { Box, Card, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { RiUserSettingsLine } from "react-icons/ri"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { FaUserTie } from "react-icons/fa6"
import { useNavigate, useNavigation } from 'react-router-dom'

const Stepone = () => {
  const navigation = useNavigate()
  const nextstep = () => {
    navigation('/step2')
  }
  const login= ()=>{
    navigation('/login')
  }
  const heading ={
    color:"#5D5F64",
  }
  return (
    <Box h="100%" w="100%" display="flex" justifyContent='center' bg='#FAFAFA' flexDirection='column'>
      <Box mb='10' ml='108' >
        <Heading as='h1' size='lg' sx={heading}>
          What type of user are you?
        </Heading>
      </Box>
      <VStack gap='10px' width='100%' maxWidth='600px' px='4' ml='108'>
        <Card p='20px' width='100%' _hover={{ bg: "green.50", border: '2px solid', borderColor: '#D3F2C1', borderRadius: "10px" }}
        onClick={login}
        >
          <HStack spacing='4'>
            <Box border='2px solid' borderColor='green.300' color='green.600' borderRadius='5px' h='70px' w='70px' alignItems='center' justifyContent='center' display='flex'>
              <RiUserSettingsLine size='30px' />
            </Box>
            <Box flex='1'>
              <VStack alignItems='flex-start'>
                <Heading size='sm' sx={heading}>CORPORATE USER</Heading>
                <Text>View statements</Text>
              </VStack>
            </Box>
          </HStack>
        </Card>

        <Card p='20px' width='100%' cursor='pointer' _hover={{ bg: "green.50", border: '2px solid', borderColor: 'green.500', borderRadius: "10px" }}
          onClick={nextstep}
        >
          <HStack spacing='4'>
            <Box border='2px solid' borderColor='green.300' bg='#82BA26' borderRadius='5px' h='70px' w='70px' color='white' alignItems='center' justifyContent='center' display='flex'>
              <FaUserTie size='30px' />
            </Box>
            <Box flex='1'>
              <VStack alignItems='flex-start'>
                <Heading size='sm' sx={heading}>BANK USER</Heading>
                <Text>Manage corporate users</Text>
              </VStack>
            </Box>
            <Box>
              <ArrowForwardIcon boxSize='40px' color='green.800' />
            </Box>
          </HStack>
        </Card>
      </VStack>
    </Box>
  )
}

export default Stepone
