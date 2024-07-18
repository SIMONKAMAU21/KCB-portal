import React, { useState } from "react";
import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Switch,
  IconButton,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Roles = () => {
  const [roles, setRoles] = useState([
    {
      name: "Maker",
      status: "Active",
      created: "05/03/2020 16:15:23",
      modified: "15/05/2020 17:10:22",
    },
    {
      name: "Super Admin",
      status: "Inactive",
      created: "05/03/2020 10:37:47",
      modified: "25/07/2020 13:24:32",
    },
    {
      name: "Super Admin",
      status: "Inactive",
      created: "05/03/2020 10:37:47",
      modified: "25/07/2020 13:24:32",
    },
    {
      name: "Super Admin",
      status: "Active",
      created: "05/03/2020 10:37:47",
      modified: "25/07/2020 13:24:32",
    },
    {
      name: "Super Admin",
      status: "Active",
      created: "05/03/2020 10:37:47",
      modified: "25/07/2020 13:24:32",
    },
    {
      name: "Super Admin",
      status: "Inactive",
      created: "05/03/2020 10:37:47",
      modified: "25/07/2020 13:24:32",
    },
  ]);

  const navigate = useNavigate();
  const handleCreateRole = () => {
    navigate("/role/Createrole");
  };

  const toggleStatus = (index) => {
    setRoles((prevRoles) =>
      prevRoles.map((role, i) =>
        i === index
          ? {
              ...role,
              status: role.status === "Active" ? "Inactive" : "Active",
            }
          : role
      )
    );
  };

  const buttonWidth = useBreakpointValue({ base: "50%", md: "20%" });

  return (
    <Box
      height="100%"
      ml={{ base: "0", md: "10px" }}
      w={{ base: "100%", md: "88%" }}
      flex={2}
      p="10px"
      fontSize={{base:"10px",md:"18px"}}
    >
      <Heading as="h5" size="sm" mb={{ base: "20px", md: "40px" }}>
        Roles
      </Heading>
      <Button
        bg="#003A49"
        color="white"
        w={buttonWidth}
        onClick={handleCreateRole}
        mb={{ base: "20px", md: "0" }}
      >
        Create Role
      </Button>

     <Box  w={{base:"100%"}}  overflow={"scroll"}>
     <Table  variant="simple" mt="20px"  size={{base:"md"}}>
        <Thead >
          <Tr>
            <Th>User Group</Th>
            <Th>Status</Th>
            <Th>Created</Th>
            <Th>Modified</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {roles.map((role, index) => (
            <Tr key={index}>
              <Td>{role.name}</Td>
              <Td>
                <Box
                  h={{base:"30px"}}
                  w={{base:"100px",md:""}}
                  borderRadius="15px"
                  backgroundColor={
                    role.status === "Active" ? "#82BA26" : "#ccc"
                  }
                  display="flex"
                  alignItems="center"
                  color={role.status === "Active" ? "white" : "red.500"}
                  justifyContent="space-around"
                >
                  <Switch
                    isChecked={role.status === "Active"}
                    onChange={() => toggleStatus(index)}
                    colorScheme="green"
                  />
                  {role.status.toLowerCase()}
                </Box>
              </Td>
              <Td>{role.created}</Td>
              <Td>{role.modified}</Td>
              <Td color="#82BA26">
                Permissions
                <IconButton
                  aria-label="Edit Role"
                  icon={<EditIcon />}
                  size="sm"
                  ml={2}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
     </Box>
    </Box>
  );
};

export default Roles;
