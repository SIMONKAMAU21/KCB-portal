import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import Logo from '../logo/Logo';

function AuthWrapper({ leftChildren, rightChildren, Background }) {
  return (
    <HStack width="100vw" height="100vh" bg='white'>
      <VStack
        p='40px'
        bg={Background || "#003A49"}
        flex={1}
        height="100vh"
        color='white'
      >
        <Box w='100%'>
          <Logo bgColor={Background || "#003A49"} />
        </Box>
        <Box mt='45%' w='100%' letterSpacing='2px' >
          {leftChildren}
        </Box>
      </VStack>
      <VStack
        flex={3}
        height="100vh"
        bg='#FAFAFA'
      >
        <Box display='flex' justifyContent='flex-end' w='100%' p='25px'>
          <span style={{color:'#B9BABC'}}>having trouble ? </span> <span style={{color:"#3E6A75", fontWeight:'bold'}}> Get Help</span>
        </Box >
        <Box h="100vh" w="80%"  mt='10%'>
        {rightChildren}
        </Box>
      </VStack>
    </HStack>
  );
}

export default AuthWrapper;
