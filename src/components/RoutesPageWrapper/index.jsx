import React, { useState } from "react";
import {
  Box,
  HStack,
  VStack,
  useBreakpointValue,
  IconButton,
} from "@chakra-ui/react";
import Logo from "../logo/Logo";
import Navbar from "../../layouts/Navbar";
import Sidebar from "../../layouts/Sidebar";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const PageWrapper = ({ rightChildren, Background, children }) => {
  const displayMode = useBreakpointValue({ base: "none", md: "block" });
  const sidebarWidth = useBreakpointValue({ base: "60%", md: "20%" });
  const [isOpen, setIsOpen] = useState(false);

  const navigationStyles = {
    top: 0,
    left: 0,
    height: "100vh",
    width: sidebarWidth,
    padding: "10px",
    zIndex: 500,
    display: displayMode,
  };

  return (
    <>
      <IconButton
        icon={isOpen ? <CloseIcon boxSize="20px" /> : <HamburgerIcon boxSize="20px" />}
        display={{ base: "block", md: "none" }}
        position="fixed"
        top="20px"
        color="black"
        bg="#82BA26"
        left="10px"
        w="30px"
        h="30px"
        onClick={() => setIsOpen(!isOpen)}
        zIndex={1000}
      />
      <HStack>
        <VStack
          flex={1}
          bg={Background || "#003A49"}
          sx={{ ...navigationStyles, display: isOpen ? "block" : displayMode }}
          position={{ base: "absolute", md: "fixed" }}
          h="100vh"
        >
          <Box>
            <Logo />
          </Box>
          <Sidebar />
        </VStack>

        <VStack flex={6} bg="#FAFAFA" h="100vh" w="100vw" ml={{ base: "none", md: "20%" }}>
          <Navbar />
          {rightChildren}
          {children}
        </VStack>
      </HStack>
    </>
  );
};

export default PageWrapper;
