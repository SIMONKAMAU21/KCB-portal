import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Button, Heading, VStack, HStack, Text, FormControl, FormLabel } from '@chakra-ui/react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import AuthWrapper from '../../components/AuthPageWrapper';
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Stepsauthentication from './Stepsauthentication';


const PhoneNumberVerification = () => {
  const navigation = useNavigate()
  const { control, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
const nextStep=()=>{
navigation('/verify-account')
}
  return (
    <AuthWrapper
      Background='white'
      leftChildren={
        <Stepsauthentication/>
     }
      rightChildren={
        <>
          <Box>
            <HStack>
              <Box flex={3} w="100%" bg="#FAFAFA" >
                <VStack gap="30px" w="40%">
                  <Box w="100%" >
                    <Heading as="h4" size='lg' color='#6A6C70'>Continue with Phone</Heading>
                    <Text color='rgb(197,198,201)' mt='20px'>We will call or text you to confirm your number. Standard message and rates apply.</Text>
                  </Box>
                  <Box w="100%">
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <VStack gap="20px" w="100%">
                        <FormControl isInvalid={errors.phoneNumber} mt='20px'>
                          <FormLabel htmlFor="phoneNumber" color='rgb(142,141,141)'>Phone Number</FormLabel>
                          <Controller
                            name="phoneNumber"
                            control={control}
                            rules={{ required: 'Phone number is required' }}
                            render={({ field }) => (
                              <PhoneInput
                                country={'ke'}
                                value={field.value}
                                onChange={field.onChange}
                                inputStyle={{ width: '100%' }}
                                placeholder="Enter phone number"
                              />
                            )}
                          />
                          {errors.phoneNumber && <Text color="red.500">{errors.phoneNumber.message}</Text>}
                        </FormControl>
                        <Box ml="50%" bg="#82BA26" color="white" type="submit" display="flex" w='50%' alignItems="center" justifyContent="center" borderRadius="md" onClick={nextStep}>
                          <Button bg="transparent" color="white" _hover={{ bg: "transparent" }} _active={{ bg: "transparent" }} type="submit">
                            Continue
                          </Button>
                          <FaArrowRight style={{ marginLeft: '4px' }} />
                        </Box>
                      </VStack>
                    </form>
                  </Box>
                </VStack>
              </Box>
            </HStack>
          </Box>
        </>
      }
    />
  );
};

export default PhoneNumberVerification;
