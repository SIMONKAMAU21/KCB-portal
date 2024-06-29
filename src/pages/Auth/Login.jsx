import React, { useState } from 'react';
import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import Loginform from './Loginform';
import AuthWrapper from '../../components/AuthPageWrapper';

const Login = () => {

  return (
    <AuthWrapper
      leftChildren={
      <Box  >
        <Text  mb='20px' fontSize='40px' w='100%'>Welcome to the <br /> Simba Portal.</Text >
          <Text color='#D9E2E4' w='100%'>View recycling statements, interim statements, loan <br />statements, and query records related to your KCB <br />Bank account</Text>
      </Box>
      }
      rightChildren={
        <Loginform />
      } />
  );
}

export default Login;
