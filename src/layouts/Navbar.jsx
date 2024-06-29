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
  const activeLink = sidebarLinks.find(link => link.path === location.pathname);

  return (
    <HStack w='100%' justifyContent='space-between' p='10px 10px 10px 10px'>
      <HStack>
        <Box>
          <CgMenuBoxed size='40px' color='gray' />
        </Box>
        <Box fontWeight='bold' color='rgb(50,51,61)'>
          {activeLink ? activeLink.label : ''}
        </Box>
      </HStack>
      <HStack justifyContent='space-around' w='20%'>
        <Box><LiaSearchSolid size='27px' /></Box>
        <Box><HiOutlineMail size='27px' /></Box>
        <Box><IoIosNotificationsOutline size='27px' /></Box>
        <HStack>
          <Avatar name='William' bg='rgb(34,31,32)'></Avatar>
          <Text>William Situma</Text>
        </HStack>
      </HStack>
    </HStack>
  );
}

export default Navbar;
