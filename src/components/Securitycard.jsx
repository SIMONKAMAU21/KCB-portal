import React from "react";
import {
  Box,
  Heading,
  Button,
  Text,
} from "@chakra-ui/react";

const Securitycard = ({ icon, heading, text, width }) => {
  return (
    <Box
      h={"240px"}
      gap={"10px"}
      p={{ base: "5px", md: "10px" }}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      boxShadow={"lg"}
      bg={"white"}
      w={width}
      _hover={{
        width:"60%"
      }}
    >
      <Box>{icon}</Box>
      <Heading color={"gray.700"} as="h2" size={"lg"} >{heading}</Heading>
      <Text  fontSize={{ base: "14px" ,md:"25px"}}>{text}</Text>
      <Button bg={"#013A49"} color={"white"} p={"20px"} w={"20%"}>
        ADD
      </Button>
    </Box>
  );
};

export default Securitycard;
