import React, { useState } from 'react';
import { Box, Button, Checkbox, HStack, Heading, Input, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../components/Statesmanagement/useStore';

const Loginform = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const isFirstTimeUser = useStore((state) => state.isFirstTimeUser);
  const setFirstTimeUser = useStore((state) => state.setFirstTimeUser);

  const navigate = useNavigate();

  const handleSignIn = () => {
    let valid = true;
    if (!username) {
      setUsernameError('Username is required.');
      valid = false;
    } else {
      setUsernameError('');
    }
    if (!password) {
      setPasswordError('Password is required.');
      valid = false;
    } else {
      setPasswordError('');
    }
    if (valid) {
      setFirstTimeUser(false)
      if (isFirstTimeUser) {
        navigate('/phone-number')
      } else {
        navigate('/dashboard')
      }
    }
  };

  const handlerecoverpassword = () => {
    navigate('/recoverpassword');
  };

  return (
    <Box   >
      <VStack gap="30px" w="40%">
        <Box w="100%">
          <Heading as="h4">Sign in</Heading>
        </Box>
        <Box w="100%" fontSize='18px'>
          <Text>Please sign in to your account to access the partner portal</Text>
        </Box>
        <Box w="100%">
          <Text fontWeight="500">Your username</Text>
          <Input
            placeholder="Enter your email or phone number"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {usernameError && <Text color="red.500" mt={2}>{usernameError}</Text>}
        </Box>
        <Box w="100%">
          <Text fontWeight="500">Password</Text>
          <Input
            placeholder="Enter your password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError && <Text color="red.500" mt={2}>{passwordError}</Text>}
        </Box>
        <Box w="100%">
          <HStack display="flex" justifyContent="space-between">
            <HStack display="flex" alignItems="center" color="gray.500">
              <Checkbox defaultChecked colorScheme="gray" />
              <Text>Remember me</Text>
            </HStack>
            <Text onClick={handlerecoverpassword} cursor='pointer' _hover={{color:'green.400'}} fontWeight="500">Recover password</Text>
          </HStack>
        </Box>
        <Box w="100%">
          <Button bg="#82BA26" w="100%" color='white' onClick={handleSignIn}>
            SIGN IN
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Loginform;
