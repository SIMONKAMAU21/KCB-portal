import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Avatar,
  HStack,
  Text,
  Select,
  VStack,
  Spacer,
  useBreakpointValue,
} from "@chakra-ui/react";

const Generalinfo = () => {
  const [name, setName] = useState("SITUMA");
  const languages = ["English", "Spanish", "French", "Kiswahili"];
  const createdByOptions = ["System", "Admin"];

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const color = {
    color: "black.500",
  };
  const select = {
    height: "60px",
  };

  const formWidth = useBreakpointValue({ base: "100%", md: "70%" });
  const avatarSize = useBreakpointValue({ base: "lg", md: "2xl" });

  return (
    <Box
      height={"100%"}
      ml={"10px"}
      w={"100%"}
      border={"2px solid red"}
      background={"white"}
      p={"10px"}
    >
      <Heading as="h5" size="sm">
        General information
      </Heading>
      <HStack
        border={"2px solid rgb(240,243,245)"}
        p={"20px"}
        w={formWidth}
        mt={"30px"}
        h={"20%"}
      >
        <Avatar name="William" bg="rgb(34,31,32)" size={avatarSize} />
        <Text>William Situma</Text>
      </HStack>

      <Box p={2} borderRadius="lg" w={formWidth}>
        <VStack spacing={2}>
          <FormControl id="username">
            <FormLabel color={color.color}>Username</FormLabel>
            <Input
              placeholder="Username"
              value={name}
              onChange={handleChange}
              height={select.height}
            />
          </FormControl>
          <HStack w={"100%"} flexWrap="wrap" spacing={4}>
            <VStack flex={2} minW="250px">
              <FormControl id="email">
                <FormLabel color={color.color}>Email</FormLabel>
                <Input type="email" placeholder="Enter your email" h={select.height} />
              </FormControl>

              <FormControl id="language" h={"150px"}>
                <FormLabel color={color.color}>Language</FormLabel>
                <Select defaultValue="English" h={"60px"}>
                  {languages.map((language, index) => (
                    <option key={index} value={language}>
                      {language}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </VStack>
            <Spacer display={{ base: "none", md: "block" }} />
            <VStack flex={2} minW="250px">
              <FormControl id="phone">
                <FormLabel color={color.color}>Phone</FormLabel>
                <Input type="tel" placeholder="Enter phone number" h={select.height} />
              </FormControl>
              <FormControl id="createdBy" h={"150px"}>
                <FormLabel color={color.color} fontSize={"small"}>
                  Created by
                </FormLabel>
                <Select defaultValue="System" isReadOnly h={select.height}>
                  {createdByOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </VStack>
          </HStack>

          <HStack w={"100%"} flexWrap="wrap" spacing={4}>
            <Button backgroundColor="#82BA26" color={"white"}>
              Update Settings
            </Button>
            <Button variant="outline" color={"gray.500"}>
              Cancel
            </Button>
          </HStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Generalinfo;
