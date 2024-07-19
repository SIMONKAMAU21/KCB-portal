import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  HStack,
  VStack,
  useBreakpointValue,
  Text,
  Switch,
} from "@chakra-ui/react";
import { AddIcon, EmailIcon, LockIcon } from "@chakra-ui/icons";
import Securitycard from "../../../components/Securitycard";
import { GiSecurityGate } from "react-icons/gi";
import { color } from "framer-motion";

const Security = () => {
  const inputHeight = "60px";
  const inputWidth = useBreakpointValue({ base: "100%", md: "70%" });
  const cardWidth = useBreakpointValue({ base: "100%", md: "40%" });

  return (
    <Box
      h="100%"
      w={{ base: "100%", md: "89%" }}
      gap="20px"
      p={{ base: "10px", md: "none" }}
    >
      <Heading as="h5" size="sm" mb={{ base: "20px", md: "40px" }}>
        Security
      </Heading>
      <VStack align="flex-start" spacing={5} w="100%">
        <HStack
          w="100%"
          flexDirection={{ base: "column", md: "row" }}
          spacing={5}
        >
          <FormControl id="Password">
            <FormLabel fontSize={{ base: "small", md: "md" }}>
              Password
            </FormLabel>
            <Input
              placeholder="current password"
              height={inputHeight}
              w={inputWidth}
            />
          </FormControl>

          <FormControl id="New password">
            <FormLabel fontSize={{ base: "small", md: "md" }}>
              New password
            </FormLabel>
            <Input
              placeholder="New password"
              height={inputHeight}
              w={inputWidth}
            />
          </FormControl>
        </HStack>
        <Box width="100%" mt="5%">
          <Heading as="h5" size="lg" mb={{ base: "20px", md: "40px" }}>
            Security Questions
          </Heading>
          <HStack
            w="100%"
            flexDirection={{ base: "column", md: "row" }}
            spacing={5}
          >
            <FormControl id="Question 1">
              <FormLabel fontSize={{ base: "small", md: "md" }}>
                Question 1
              </FormLabel>
              <Input
                placeholder="Question 1"
                height={inputHeight}
                w={inputWidth}
              />
            </FormControl>

            <FormControl id="Answer">
              <FormLabel fontSize={{ base: "small", md: "md" }}>
                Answer
              </FormLabel>
              <Input placeholder="Answer" height={inputHeight} w={inputWidth} />
            </FormControl>
          </HStack>
        </Box>
      </VStack>
      <Button
        fontWeight={{ base: "500", md: "600" }}
        fontSize={{ base: "lg", md: "2xl" }}
        mt={"20px"}
        w={{ base: "50%", md: "20%" }}
        bg={"#82BA27"}
        color={"white"}
        p={{ base: "20px", md: "40px" }}
      >
        <AddIcon boxSize={5} mr={"15px"} />
        ADD MORE
      </Button>
      <Box mt={"50px"}>
        <Heading as="h5" size="lg" mb={{ base: "20px", md: "40px" }}>
          Two-factor Authentication
        </Heading>
        <Text fontSize={{ base: "12px", md: "23px" }}>
          Add another layer of security to your account with this feature
        </Text>
        <HStack gap={"30px"} mt={"20px"}>
          <Text fontSize={{ base: "15px", md: "20px" }}>
            Enable two-factor authentication
          </Text>
          <Switch colorScheme="green" size={{ base: "sm", md: "lg" }} />
        </HStack>
        <HStack
          mt={"50px"}
          flexDirection={{ base: "column", md: "row" }}
          spacing={5}
        >
          <Securitycard
            icon={<EmailIcon boxSize={"40px"} color={"gray.500"} />}
            heading={"Text Messages"}
            text={
              "Receive verification codes via SMS. Standard messaging rates may apply."
            }
            width={cardWidth}
          />
          <Securitycard
            icon={<LockIcon boxSize={"40px"} color={"gray.500"} />}
            heading={"Authenticator App"}
            text={"Third-party authenticator app such as Google Authenticator"}
            width={cardWidth}
          />
        </HStack>
        <HStack mt={"30px"}>
          <Button bg={"#82BA27"} p={"30px"} color={"white"}>
            UPDATE SETTINGS
          </Button>
          <Button p={"30px"}>CANCEL</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Security;
