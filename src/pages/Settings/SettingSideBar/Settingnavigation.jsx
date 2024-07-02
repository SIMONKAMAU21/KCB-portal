import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, HStack, Text } from "@chakra-ui/react";

const SettingLinks = [
  { path: "", label: "General information" },
  { path: "roles", label: "Roles" },
  { path: "reports", label: "Security" },
  { path: "cards", label: "Cards" },
  { path: "float-limits", label: "Float Limits" },
  { path: "inbox", label: "Inbox" },
  { path: "sessions", label: "Sessions" },
];

const Leftsidebar = () => {
  const location = useLocation();

  return (
    <Box
      p="10px"
      color="#6F7E84"
      w="100%"
      display="flex"
      flexDirection="column"
      background={"white"}
      h={"100vh"}
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
        >
          <Box
            borderRadius="md"
            w="100%"
            p="3"
          >
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
