import React from "react";
import { Box, Text, VStack, HStack, Image } from "@chakra-ui/react";
import { BiDotsHorizontal, BiDotsVertical } from "react-icons/bi";

const CreditCard = ({ src, name, last4Digits, expDate }) => {
  return (
    <Box
      bg="white"
      borderRadius="md"
      boxShadow="md"
      p={4}
      width={{ base: "100%", md: "90%" }}
      flex={1}
    >
      <VStack align="start">
        <HStack justify="space-between" width="100%">
          <Image src={src} boxSize={"90px"} />
          <Box>
            <BiDotsVertical />
          </Box>
        </HStack>
        <Text mt={4} fontSize="md" fontWeight="medium">
          {name}
        </Text>
        <Text fontSize="lg" fontWeight="bold" letterSpacing="wide">
          **** **** **** {last4Digits}
        </Text>
        <HStack justify="space-between" width="100%" mt={4}>
          <Text fontSize="sm">Exp Date: {expDate}</Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CreditCard;
