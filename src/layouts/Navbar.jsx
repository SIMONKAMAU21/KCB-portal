import { Avatar, Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { CgMenuBoxed } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { sidebarLinks } from './Sidebar'; // Ensure this import is correct
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const activeLink = sidebarLinks.find(link => location.pathname.includes(link.path));

  return (
    <HStack w='100%' justifyContent='space-between' p='10px'>
      <HStack>
        <Box display={{ base: "none", md: "block" }}>
          <CgMenuBoxed size='40px' color='gray' />
        </Box>
        <Box fontWeight='bold' color='rgb(50,51,61)' ml={{ base: "50px", md: "1px" }}>
          {activeLink ? activeLink.label : ''}
        </Box>
      </HStack>

      <HStack spacing={{ base: 2, md: 4 }} alignItems='center'>
        <Box display={{ base: "block", md: "block" }}><LiaSearchSolid size='27px' /></Box>
        <Box display={{ base: "block", md: "block" }}><HiOutlineMail size='27px' /></Box>
        <Box display={{ base: "block", md: "block" }}><IoIosNotificationsOutline size='27px' /></Box>
        <HStack>
          <Avatar name='William' bg='rgb(34,31,32)' />
          <Text display={{ base: "none", md: "block" }}>William Situma</Text>
        </HStack>
      </HStack>
    </HStack>
  );
}

export default Navbar;
