import React from 'react';
import AuthWrapper from '../../components/AuthPageWrapper';
import {
  Box,
  Text,
  VStack,
  HStack,
  Heading,
  Checkbox,
  Button
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

const Permission = () => {
    const navigate = useNavigate()
  const Roles = [
    {
      number: 1,
      text: "CREATE ROLE",
      color: "#003A49",
      path: "/role/Createrole",
    },
    {
      number: 2,
      text: "PERMISSIONS",
      color: "#E2E2E2",
      path: "/role/Permission",
    },
  ];
  
  const location = useLocation();
  const currentRoleIndex = Roles.findIndex((role) =>
    location.pathname.includes(role.path)
  );
const backward = () =>{
    navigate("/role/CreateRole")
}
const home =() =>{
    navigate("/settings/roles")
}
  return (
    <AuthWrapper
      Background={"white"}
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
                <Text
                  color={
                    currentRoleIndex === role.number - 1 ? "#003A49" : "#E2E2E2"
                  }
                  fontSize={{ base: "14px", md: "25px" }}
                >
                  {role.text}
                </Text>
              </Box>
            </NavLink>
          ))}
        </Box>
      }
      rightChildren={
        <Box  padding={8}>
          <Heading size="lg" mb={6}>
            Set permissions
          </Heading>
          <Text mb={4}>Select all that apply</Text>

          {/* Permission categories */}
          <HStack spacing={8} wrap="wrap">
    
            {[...Array(2)].map((_,index)=>(
                <VStack
                key={index}
                alignItems="flex-start"
                width={{base:"100%",md:"30%"}}
                >
                    <Heading size={"md"}>
                        Category
                    </Heading>
                    {[...Array(8)].map((_,index)=>(
                        <Checkbox key={index} colorScheme="green">Lorem Ipsum</Checkbox>
                    ))}

                </VStack>
            ))}
          </HStack>
          <HStack mt={"10%"} gap={"30px"}>
            <Text cursor={"pointer"} onClick={backward} color={"#999A9C"} fontWeight={"bold"}> PREVIOUS STEP</Text>
            <Button onClick={home} backgroundColor={"#6DD230"} color={"white"} w={{base:"30%",md:"10%"}}> SAVE <ArrowForwardIcon boxSize="24px"/></Button>
          </HStack>
        </Box>
      }
    />
  );
};

export default Permission;
