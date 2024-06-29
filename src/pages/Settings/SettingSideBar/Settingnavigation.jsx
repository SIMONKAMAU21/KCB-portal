import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Box, HStack, Text, Icon } from "@chakra-ui/react";

const SettingLinks = [
  { path: "/info", label: "General infomation" },
  { path: "/roles", label: "Roles" },
  { path: "/reports", label: "Security" },
  { path: "/ ", label: "Cards" },
  { path: "/", label: "Float Limits" },
  { path: "/", label: "Inbox" },
  { path: "/", label: "Sessions" },
];
const Leftsidebar = () => {
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
          to={link.path}
          key={index}
          style={{
            textDecoration: "none",
            display: "block",
            marginBottom: "20px",
          }}
        >
          <Box
            borderRadius="md"
            borderLeft={link.path === location.pathname ? "2px solid black" : " "}
            w="100%"
            p="3"
          >
            <HStack
              spacing="4"
              alignItems="center"
              color={link.path === location.pathname ? "black" : "gray.500"}
            >
              <Text>{link.label}</Text>
            </HStack>
          </Box>
        </NavLink>
      ))}
    </Box>
  );
};

export default Leftsidebar;
