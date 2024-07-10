import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import Logo from '../logo/Logo';

function AuthWrapper({ leftChildren, rightChildren, Background }) {
  return (
    <HStack width="100vw" height="100vh" bg='white' flexDirection={{ base: "column", md: "row" }}>
      <VStack
        p={{ base: '10px', md: "40px" }}
        bg={Background || "#003A49"}
        flex={1}
        height={'100%'}
        width={"100%"}
        boxShadow={{base:"2xl"}}
        color='white'
      
      >
        <Box w='100%' mb={{ base: "10px", md: "30px" }}  >
          <Logo bgColor={Background || "#003A49"} />
        </Box>
        <Box w='100%' letterSpacing='2px'    mt={{base:"none",md:"150px"}}>
          {leftChildren}
        </Box>
      </VStack>
      <VStack
        flex={3}
        height="100%"
        width={"100%"}
        bg='#FAFAFA'
        justifyContent="center"
      >
        <Box display='flex' justifyContent={{ base: "flex-end", md: "flex-end" }} w='100%' p={{ base: "10px", md: "25px" }}>
          <span style={{ color: '#B9BABC' }}>having trouble?</span> <span style={{ color: "#3E6A75", fontWeight: 'bold' }}> Get Help</span>
        </Box>
        <Box h="100%" w={{ base: "100%", md: "80%" }} mt={{ base: "10px", md: "10%" }} >
          {rightChildren}
        </Box>
      </VStack>
    </HStack>
  );
}

export default AuthWrapper;
