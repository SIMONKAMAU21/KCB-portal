import React from "react";
import AuthWrapper from "../../components/AuthPageWrapper";
import {
  Box,
  Button,
  Heading,
  VStack,
  HStack,
  Text,
  FormControl,
  Input,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

const CreateRole = () => {
  return (
    <AuthWrapper
      Background={"white"}
      rightChildren={
        <Box w={"50%"}>
          <Text  fontSize={"3xl"}>
            Add role
          </Text>
          <Text mt={8}>
            Enter a name for the role you wish to create and assign it a status
          </Text>
          <VStack spacing={4} align="start" mt={5}>
            <FormControl>
              <FormLabel fontSize={"sm"}>Name</FormLabel>
              <Input w={"60%"} placeholder="Name" />
            </FormControl>
           <FormControl flex={16}>
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
      leftChildren={<>hello</>}
    />
  );
};

export default CreateRole;
