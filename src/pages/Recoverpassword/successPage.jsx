import React from 'react'
import AuthWrapper from '../../components/AuthPageWrapper'
import { Box, Heading, Image, Text, Link } from '@chakra-ui/react'
import { FaRegCircleCheck } from "react-icons/fa6";
import email from '../../assets/Capture.png'
import { useNavigate } from 'react-router-dom';

const Successage = () => {
  const navigation = useNavigate()
  const handleCreate=()=>{
navigation('/createpassword')
  }
  return (
    <AuthWrapper
      Background='white'
      leftChildren={
        <Box display='flex' flexDirection={{base:"row",md:"column"}} gap={{ base: '20px', md: '40rem', lg: 'none' }}>
          <Text color='#82BA26' fontSize={{base:"20px",md:"45px"}}>Reset password</Text>
          <FaRegCircleCheck size={"50px"} color='#82BA26' />
        </Box>
      }
      rightChildren={
        <Box w='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center' h='100%'>
          <Image src={email} />
          <Heading as='h4' size='lg' color='#474A4E' textAlign='center' onClick={handleCreate}>Password reset email sent!</Heading>
          <Text color='#5A5A63' fontSize={{base:"10px",md:"sm"}} textAlign='center'>
            If you do not receive any email from us within 15 <br /> minutes, please check your SPAM folder. If there is still <br /> no email-{' '}
            <Link href="/"  textDecoration='underline'>
              click here to resend email
            </Link>
          </Text>
        </Box>
      }
    />
  )
}

export default Successage;
