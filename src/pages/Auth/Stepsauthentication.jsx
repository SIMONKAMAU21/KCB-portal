import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { FaCheckCircle } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';

const Stepsauthentication = () => {
  const location = useLocation();
  const steps = [
    { icon: <FaCheckCircle size='60px' />, text: 'LINK SIGN IN', color: '#E2E2E2', path: '/login' },
    { number: 2, text: 'PHONE NUMBER', color: '#E2E2E2', path: '/phone-number' },
    { number: 3, text: 'VERIFY ACCOUNT', color: '#E2E2E2', path: '/verify-account' },
    { number: 4, text: 'LOGIN', color: '#E2E2E2', path: '/login' },
  ];

  const currentStepIndex = steps.findIndex(step => step.path === location.pathname);

  return (
    <Box color='black' gap='30px' fontWeight={{base:"500",md:'700'}} fontSize={{base:"13px",md:"18px"}}>
    {steps.map((step, index) => (
      <NavLink
        to={step.path}
        key={index}
        style={{ textDecoration: 'none' }}
      >
        <Box display='flex' alignItems='center' gap='20px'>
          {index < currentStepIndex ? (
            <FaCheckCircle size='60px' color='#003A49' />
          ) : step.icon ? (
            step.icon
          ) : (
            <Box color={step.color} w={{base:"25px",md:"50px"}} h={{base:"25px",md:"50px"}} borderRadius='50%' display='flex' alignItems='center' border={`2px solid ${step.color}`} justifyContent='center'>
              {step.number}
            </Box>
          )}
          <Text color={index === currentStepIndex ? '#75959D' : step.color}>{step.text}</Text>
        </Box>
      </NavLink>
    ))}
  </Box>
);
};

export default Stepsauthentication;
