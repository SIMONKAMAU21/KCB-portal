import React, { useState } from "react";
import { Box, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import PageWrapper from "../../components/RoutesPageWrapper";
import Leftsidebar from "./SettingSideBar/Settingnavigation";

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const displayMode = useBreakpointValue({ base: "block", md: "none" });

  return (
    <PageWrapper>
      <HStack w="full" align="stretch">
        <Box flex={{ base: 2, md: 8 }} w={{base:"100%"}}  h="100vh" p={{ base: 1, md: 8 }}>
          <Outlet />
        </Box>
        
        <Box >
          <Leftsidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </HStack>

      <IconButton
        icon={isOpen ? <CloseIcon boxSize="20px" /> : <HamburgerIcon boxSize="20px" />}
        display={displayMode}
        position="fixed"
        top="80px"
        right="20px"
        color="#82BA26"
        bg="gray.300"
        w="30px"
        h="30px"
        onClick={() => setIsOpen(!isOpen)}
        zIndex={1000}
      />
    </PageWrapper>
  );
};

export default Setting;
