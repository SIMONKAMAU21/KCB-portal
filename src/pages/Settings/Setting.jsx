import React, { useState } from "react";
import { Box, HStack, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import PageWrapper from "../../components/RoutesPageWrapper";
import Leftsidebar from "./SettingSideBar/Settingnavigation";

const Setting = () => {
  const [isOpen, setIsOpen] = useState(false);
  const displayMode = useBreakpointValue({ base: "none", md: "block" });

  return (
    <PageWrapper>
      <HStack w="full" align="stretch">
        <Box flex={{ base: 1, md: 8 }} h="100vh" p={{ base: 1, md: 8 }}>
          <Outlet />
        </Box>
        
        <Box flex={{ base: 1, md: 2 }} border={"2px solid red"}>
          <Leftsidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </HStack>

      <IconButton
        icon={isOpen ? <CloseIcon boxSize="20px" /> : <HamburgerIcon boxSize="20px" />}
        display={{ base: "block", md: "none" }}
        position="fixed"
        top="20px"
        right="10px"
        color="black"
        bg="#82BA26"
        w="30px"
        h="30px"
        onClick={() => setIsOpen(!isOpen)}
        zIndex={1000}
      />
    </PageWrapper>
  );
};

export default Setting;
