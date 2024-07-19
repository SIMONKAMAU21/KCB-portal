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
      h={{base:"240px",md:"340px"}}
      gap={"10px"}
      p={{ base: "5px", md: "10px" }}
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      bg={"white"}
      border={"2px solid"}
      borderRadius={"lg"}
      w={width}
      _hover={{
        height:"350px",
        boxShadow:"2xl",
        border:"none"

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
