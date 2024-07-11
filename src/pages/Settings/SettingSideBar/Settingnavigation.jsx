import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, HStack, Text, useBreakpointValue } from "@chakra-ui/react";

const SettingLinks = [
  { path: "", label: "General information" },
  { path: "roles", label: "Roles" },
  { path: "reports", label: "Security" },
  { path: "cards", label: "Cards" },
  { path: "float-limits", label: "Float Limits" },
  { path: "inbox", label: "Inbox" },
  { path: "sessions", label: "Sessions" },
];

const Leftsidebar = ({ isOpen, setIsOpen }) => {
  const displayMode = useBreakpointValue({ base: "none", md: "block" });
  const sidebarWidth = useBreakpointValue({ base: "60%", md: "20%" });
  const location = useLocation();
  const navigationStyles = {
    top: 0,
    right: 0,
    height: "100vh",
    width: sidebarWidth,
    padding: "10px",
    zIndex: 500,
    display: displayMode,
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Box
      p="10px"
      color="#6F7E84"
      sx={{ ...navigationStyles, display: isOpen ? "block" : displayMode }}
      flexDirection="column"
      position={{ base: "absolute", md: "fixed" }}
      background="white"
      boxShadow="md"
      borderRadius="md"
    >
      {SettingLinks.map((link, index) => (
        <NavLink
          to={`/settings/${link.path}`}
          key={index}
          style={{
            textDecoration: "none",
            display: "block",
            marginBottom: "20px",
            borderLeft: location.pathname === `/settings/${link.path}` ? "2px solid black" : "none",
            color: location.pathname === `/settings/${link.path}` ? "black" : "#6F7E84",
          }}
          onClick={handleNavLinkClick}
        >
          <Box borderRadius="md" w="100%" p="3">
            <HStack spacing="4" alignItems="center">
              <Text>{link.label}</Text>
            </HStack>
          </Box>
        </NavLink>
      ))}
    </Box>
  );
};

export default Leftsidebar;
