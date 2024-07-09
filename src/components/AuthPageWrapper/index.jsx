import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import Logo from '../logo/Logo';

function AuthWrapper({ leftChildren, rightChildren, Background }) {
  return (
    <HStack width="100vw" height="100vh" bg='white'>
      <VStack
        p={{base:'10px',md:"40px"}}
        bg={Background || "#003A49"}
        flex={{base:"0.2" ,md:"1"}}
        height={{base:'100vh', md:"100vh"}}
        color='white'
      >
        <Box w='100%'>
          <Logo bgColor={Background || "#003A49"} />
        </Box>
        <Box mt={{base:"30px",md:"45%" }} w='100%' letterSpacing='2px' >
          {leftChildren}
        </Box>
      </VStack>
      <VStack
        flex={3}
        height="100vh"
        bg='#FAFAFA'
      >
        <Box display='flex' justifyContent={{base:"flex-start" ,md:"flex-end"}} w='100%' p={{base:"10px" , md:"25px"}}>
          <span style={{color:'#B9BABC'}}>having trouble ? </span> <span style={{color:"#3E6A75", fontWeight:'bold'}}> Get Help</span>
        </Box >
        <Box h="100vh" w={{base:"100%",md:"80%"}}  mt={{base:"10px",md:"10%"}}>
        {rightChildren}
        </Box>
      </VStack>
    </HStack>
  );
}

export default AuthWrapper;
