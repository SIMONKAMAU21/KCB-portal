import React from 'react'
import { Box, HStack, VStack } from '@chakra-ui/react';
import Logo from '../logo/Logo';
import Navbar from '../../layouts/Navbar';
import Sidebar from '../../layouts/Sidebar';


const PageWrapper = ({rightChildren, Background, children }) => {
  return (
    <HStack>
      <VStack
        flex={1}
        bg={Background || "#003A49"}
        h='100vh'
      >
        <Box p='10px'>
          <Logo />
          </Box>
        <Sidebar />
      </VStack>

      <VStack flex={6}
        bg='#FAFAFA'
        h='100vh'
        w='100vw'
      >
        <Navbar />
        {rightChildren}
        {children}
      </VStack>
    </HStack>
  )
}

export default PageWrapper