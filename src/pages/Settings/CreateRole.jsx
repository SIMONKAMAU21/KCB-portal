import React from "react";
import AuthWrapper from "../../components/AuthPageWrapper";
import {
  Box,
  Button,
  Text,
  FormControl,
  Input,
  FormLabel,
  Select,
  VStack,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { NavLink, useLocation } from "react-router-dom";

const CreateRole = () => {
  const Roles = [
    { number: 1, text: "CREATE ROLE", color: "#003A49", path: "/role/CreateRole" },
    { number: 2, text: "PERMISSIONS", color: "#E2E2E2", path: "/role/CreateRole" },
  ];

  const location = useLocation();
  const currentRoleIndex = Roles.findIndex((role) => location.pathname.includes(role.path));

  return (
    <AuthWrapper
      Background={"white"}
      rightChildren={
        <Box w={"50%"}>
          <Text fontSize={"3xl"}>Add role</Text>
          <Text mt={8}>Enter name for the role you wish to create and assign it a status.</Text>
          <VStack spacing={4} align="start" mt={5}>
            <FormControl>
              <FormLabel fontSize={"sm"}>Name</FormLabel>
              <Input w={"60%"} placeholder="Name" />
            </FormControl>
            <FormControl>
              <FormLabel fontSize={"sm"}>Status</FormLabel>
              <Select w={"60%"} placeholder="Select status">
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
            </FormControl>
            <Button w={"150px"} rightIcon={<ArrowForwardIcon />} backgroundColor={"#003A49"} color={"white"}>
              Next
            </Button>
          </VStack>
        </Box>
      }
      leftChildren={
        <Box color={"black"}>
          {Roles.map((role) => (
            <NavLink to={role.path} key={role.number}>
              <Box display={"flex"} alignItems={"center"} gap="20px" mt={5}>
                <Box
                  color={role.color}
                  border={`2px solid ${role.color}`}
                  justifyContent={"center"}
                  height={"40px"}
                  width={"40px"}
                  display={"flex"}
                  alignItems={"center"}
                  borderRadius={"50%"}
                  fontSize={"lg"}
                >
                  {role.number}
                </Box>
                <Text color={currentRoleIndex === role.number - 1 ? "#003A49" : "#E2E2E2"}  fontSize={"25px"}>
                  {role.text}
                </Text>
              </Box>
            </NavLink>
          ))}
        </Box>
      }
    />
  );
};

export default CreateRole;
