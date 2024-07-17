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
  useBreakpointValue
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

const navigate = useNavigate()
const handleCreateRole= () =>{
  navigate('/role/Createrole')
}
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
  const formWidth = useBreakpointValue({ base: "100%", md: "100%" });

  return (
      <Box height="100%" ml="10px"       w={{base:"100%",md:"88%" }}
      bg="white" border={"2px solid green"} p="10px">
        <Heading as="h5" size="sm">
          Roles
        </Heading>
        <Button mt="40px" bg="#003A49" color="white" w="15%" onClick={handleCreateRole}>
          Create Role
        </Button>
        <Table variant="simple" mt="20px" >
          <Thead>
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
                    h="40px"
                    w="140px"
                    borderRadius="15px"
                    backgroundColor={role.status === "Active" ? "#82BA26" : "#ccc"}
                    alignItems="center"
                    display="flex"
                    color={role.status === "Active" ? "white" : "red.500"}
                    justifyContent="space-around"
                  >
                    <Switch
                      isChecked={role.status === "Active"}
                      onChange={() => toggleStatus(index)}
                      colorScheme="#82BA26"
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
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
  );
};

export default Roles;
