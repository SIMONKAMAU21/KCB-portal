import React, { useEffect } from 'react';
import AuthWrapper from '../../components/AuthPageWrapper';
import Stepsauthentication from './Stepsauthentication';
import { Box, Heading, Text, HStack, Input, Spinner } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import useStore from '../../components/Statesmanagement/useStore';
// import { Dots } from 'react-loader-spinner';

const Verifyaccount = () => {
  const code = useStore((state) => state.code);
  const setCode = useStore((state) => state.setCode);
  const setLoading=useStore((state)=>state.setLoading)
  const loading=useStore((state)=>state.loading)
  const navigate = useNavigate();

  useEffect(() => {
    if (code.every(digit => digit !== '')) {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        navigate('/login'); 
      }, 5000);
    }
  }, [code, navigate]);

  const handleChange = (value, index) => {
    if (!isNaN(value) && value.length <= 1) {
      setCode(index, value);

      if (value && index < 3) {
        const nextInput = document.getElementById(`code-input-${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };

  return (
    <AuthWrapper
      Background='white'
      leftChildren={<Stepsauthentication />}
      rightChildren={
        <Box  width={{base:"100%"}} h={'100%'} p={'10px'} >
          <Heading size={{base:"sm",md:"lg"}} color={"black.100"}>Confirm your number</Heading>
          <Text fontSize={{base:"10px",md:"18px"}}>Enter the code just sent to your phone</Text>
          <HStack marginTop="20px">
            {code.map((digit, index) => (
              <Input
                key={index}
                id={`code-input-${index}`}
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                maxLength={1}
                textAlign="center"
                width="50px"
                height="50px"
                fontSize="2xl"
              />
            ))}
             {
            loading ? (
              <Spinner/>
            ):(
""
            )
          }
          </HStack>
         
        </Box>
      }
    />
  );
};

export default Verifyaccount;
