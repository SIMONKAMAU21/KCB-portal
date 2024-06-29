import { Box, Card, HStack, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import { LuUserCheck2 } from "react-icons/lu";
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { IoPeopleOutline } from "react-icons/io5";

const Steptwo = () => {
  const navigation = useNavigate();
  const login = () => {
    navigation('/login');
  };

  return (
    <Box  bg='#FAFAFA' h="100%" w="100%" display="flex" mt='150px' >
      <VStack spacing='50px'>
        <Box ml='30px' color='#5D5F64'>
          <Heading ml='90px'>What would you like to do today?</Heading>
        </Box>
        <Box w='full'>
          <HStack spacing='4' justifyContent='center'>
            <Card
              padding='20px'
              h='250px'
              w='210px'
              display='flex'
              justifyContent='center'
              alignItems='center'
              _hover={{ bg: "green.50", border: '2px solid', borderColor: 'green.500', borderRadius: "10px" }}
              transition='all 0.3s'
              onClick={login}
              role="group"
            >
              <VStack gap='40px'>
                <Box
                  border='2px solid'
                  color='green'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  h='80px'
                  w='80px'
                  borderColor='green.400'
                  borderRadius='10px'
                  bg="white"
                  _groupHover={{ bg: '#82BA26', color: 'white', borderColor: 'green.500' }}
                >
                  <LuUserCheck2 size='40px' />
                </Box>
                <Box fontWeight='bold' color='#9B9BA1'>
                  <Text>LOGIN</Text>
                </Box>
                <Box color='white'>
                  <ArrowForwardIcon boxSize='30px' />
                </Box>
              </VStack>
            </Card>
            <Card
              padding='20px'
              h='250px'
              w='210px'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              _hover={{ bg: "green.50", border: '2px solid', borderColor: 'green.500', borderRadius: "10px" }}
              transition='all 0.3s'
              role="group"
            >
              <VStack gap='40px'>
                <Box
                  border='2px solid'
                  color='green'
                  display='flex'
                  justifyContent='center'
                  alignItems='center'
                  h='80px'
                  w='80px'
                  borderColor='green.400'
                  borderRadius='10px'
                  bg="white"
                  _groupHover={{ bg: '#82BA26', color: 'white', borderColor: 'green.500' }}
                >
                  <IoPeopleOutline size='40px' />
                </Box>
                <Box fontWeight='bold' color='#9B9BA1'>
                  <Text>CREATE USER</Text>
                </Box>
                <Box >
                  <ArrowForwardIcon boxSize='30px' color='##9B9BA1'/>
                </Box>
              </VStack>
            </Card>
          </HStack>
        </Box>
      </VStack>
    </Box>
  )
}

export default Steptwo;
