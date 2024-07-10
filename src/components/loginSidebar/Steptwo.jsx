import { Box, Card, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { LuUserCheck2 } from "react-icons/lu";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";

const Steptwo = () => {
  const navigation = useNavigate();
  const login = () => {
    navigation("/login");
  };

  return (
    <Box bg="#FAFAFA" h="100%" w="100%" display="flex" mt="150px" justifyContent={{base:"center",md:"flex-start"}}>
      <VStack spacing="50px">
        <Box ml={{ base: "1px", md: "30px" }} color="#5D5F64">
          <Heading fontSize={{ base: "xl", md: "2xl" }}>
            What would you like to do today?
          </Heading>
        </Box>
        <Box w="full">
          <HStack spacing="4" justifyContent="center">
            <Card
              padding="20px"
              h={{ base: "150px", md: "250px" }}
              w={{ base: "150px", md: "210px" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              _hover={{
                bg: "green.50",
                border: "2px solid",
                borderColor: "green.500",
                borderRadius: "10px",
              }}
              transition="all 0.3s"
              onClick={login}
              role="group"
            >
              <VStack gap={{base:"10px",md:"40px"}}>
                <Box
                  color="green"
                  display="flex"
                  justifyContent="center"
                  border={"2px solid "}
                  alignItems="center"
                  h={{ base: "40px", md: "80px" }}
                  w={{ base: "40px", md: "80px" }}
                  borderColor="green.400"
                  borderRadius="10px"
                  bg="white"
                  _groupHover={{
                    bg: "#82BA26",
                    color: "white",
                    borderColor: "green.500",
                  }}
                >
                  <LuUserCheck2 size="40px" />
                </Box>
                <Box fontWeight="bold" color="#9B9BA1">
                  <Text>LOGIN</Text>
                </Box>
                <Box color="white">
                  <ArrowForwardIcon boxSize="30px" />
                </Box>
              </VStack>
            </Card>
            <Card
              padding="20px"
              h={{ base: "150px", md: "250px" }}
              w={{ base: "150px", md: "210px" }}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              _hover={{
                bg: "green.50",
                border: "2px solid",
                borderColor: "green.500",
                borderRadius: "10px",
              }}
              transition="all 0.3s"
              role="group"
            >
             <VStack gap={{base:"10px",md:"40px"}}>
                <Box
                  color="green"
                  display="flex"
                  justifyContent="center"
                  border={"2px solid "}
                  alignItems="center"
                  h={{ base: "40px", md: "80px" }}
                  w={{ base: "40px", md: "80px" }}
                  borderColor="green.400"
                  borderRadius="10px"
                  bg="white"
                  _groupHover={{
                    bg: "#82BA26",
                    color: "white",
                    borderColor: "green.500",
                  }}
                >
                  <IoPeopleOutline size="40px" />
                </Box>
                <Box fontWeight="bold" color="#9B9BA1">
                  <Text>CREATE USER</Text>
                </Box>
                <Box>
                  <ArrowForwardIcon boxSize="30px" color="##9B9BA1" />
                </Box>
              </VStack>
            </Card>
          </HStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Steptwo;
