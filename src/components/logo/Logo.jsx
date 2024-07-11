import { Box, HStack, Image } from '@chakra-ui/react';
import React from 'react';
import kcb from '../../assets/kcb.png';

const Logo = ({ bgColor }) => {
  const portalColor = bgColor === 'red' ? 'red' : bgColor === 'white' ? '#013B4A' : '#F8FAFA';

  return (
    <HStack spacing={4} display='flex' w='100%'mt={"20px"}>
      <Box  >
        <Image src={kcb} w={{base:"30px",md:"50px"}} h={{base:"30px",md:"50px"}} borderRadius='10px' />
      </Box>
      <Box display='flex' alignItems='center'>
        <span style={{ color: '#87A2A9', fontSize: '25px' }}>Simba</span>
        <span style={{ color: portalColor, fontWeight: 'bold', fontSize: '25px' }}>PORTAL</span>
      </Box>
    </HStack>
  );
};

export default Logo;
