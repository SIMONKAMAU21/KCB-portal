import React, { useState } from 'react';
import { Box, Button, Checkbox, FormControl, FormLabel, Heading, Input, Stack, Text } from '@chakra-ui/react';
import usePasswordStore from '../../components/Statesmanagement/useStore';

const Passwordform = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const setPasswordChanged = usePasswordStore((state) => state.setPasswordChanged);


  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match!');
    } else {
      setError('');
      console.log('Password saved successfully');
      setPasswordChanged(true); 
    }
  };

  return (
    <Box w='40%' >
      <Heading as="h2" size="lg" color='#525459'>
        Create New Password
      </Heading>
      <Text mb="6" mt={6} color='#8F9096'>
        Enter a new password which will be used to authorize <br /> your account from now on.
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack spacing="9">
          <FormControl id="new-password" isRequired>
            <FormLabel>New Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirm-password" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <Input
              type="password"
              placeholder="Confirm new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </FormControl>
          {error && <Text color="red.500">{error}</Text>}
          <Checkbox defaultIsChecked colorScheme="gray">Remember me</Checkbox>
          <Button bg="#82BA26" color='white' type="submit">SAVE NEW PASSWORD</Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Passwordform;
