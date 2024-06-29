import React, { useState } from 'react';
import AuthWrapper from '../../components/AuthPageWrapper';
import { Heading, Text, Box } from '@chakra-ui/react';
import Passwordform from './Passwordform';
import Loginform from '../Auth/Loginform';
import usePasswordStore from '../../components/Statesmanagement/useStore';

const Createpassword = () => {
  const isPasswordChanged = usePasswordStore((state) => state.isPasswordChanged);


  return (
    <AuthWrapper
      leftChildren={
        <>
          {isPasswordChanged ? (
            <Box>
              <Text fontSize='45px'>Your password has been reset successfully.</Text>
            </Box>
          ) : (
            <Text fontSize='45px'>Create a new <br />password.</Text>
          )}
        </>
      }
      rightChildren={
        <>
          {isPasswordChanged ? (
            <Loginform/>
          ) : (
            <Passwordform onPasswordChange={() => setIsPasswordChanged(true)} />
          )}
        </>
      }
    />
  );
};

export default Createpassword;
