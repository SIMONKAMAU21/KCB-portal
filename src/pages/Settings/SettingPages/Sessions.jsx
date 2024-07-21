import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import sessionData from "../../../data/session.json";


const Sessions = () => {
  return (
    <Box
      w={{ base: "100%", md: "87%" }}
      fontSize={{ base: "11px", md: "19px" }}
      h={"100%"}
      bg={"white"}
      p={{base:"5px",md:"10px"}}
    >
      <Heading size={{ base: "sm" ,md:"lg"}}>Last Sessions</Heading>
      <TableContainer mt={"30px"}>
        <Table variant={"striped"}>
          <Thead>
            <Tr>
              <Th>Location</Th>
              <Th>Device</Th>
              <Th>Ip Address</Th>
              <Th>Status</Th>
              <Th>Time</Th>
            </Tr>
          </Thead>
          <Tbody>
            {sessionData.map((session, Address) => (
              <Tr key={Address}>
                <Td>{session.Location}</Td>
                <Td>{session.Device}</Td>
                <Td>{session.Address}</Td>
                <Td>{session.Status}</Td>
                <Td>{session.Time}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Sessions;
