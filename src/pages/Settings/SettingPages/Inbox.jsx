import React, { useState } from "react";
import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  VStack,
  IconButton,
  Tag,
  Avatar,
  Text,
  Divider,
  Badge,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { EmailIcon, SearchIcon } from "@chakra-ui/icons";
import messages from "../../../data/inbox.json";

const Inbox = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [searchQuery,setSearchQuery] =useState("")

  const handleInboxClick = () => {
    setSelectedMessage(null);
  };
  const handleSearch = (e) => {
    setSearchQuery(e.target.value)
  };
  const filteredMessages = messages.filter((message) => {
    const sender = message.sender ? message.sender.toLowerCase() : "";
    const subject = message.subject ? message.subject.toLowerCase() : "";
    const snippet = message.snippet ? message.snippet.toLowerCase() : "";

    return (
      sender.includes(searchQuery.toLowerCase()) ||
      subject.includes(searchQuery.toLowerCase()) ||
      snippet.includes(searchQuery.toLowerCase())
    );
  });
  const isLargerScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Box display="flex" h="100vh" w="100%"bg={"white"} width={"88%"} >
      {/* Sidebar */}
      <VStack
        w={{ base: "25%", md: "20%" }}
        h="100%"
        p={{ base: "2", md: "4" }}
        borderRight="2px solid"
        borderColor="gray.300"
        align="flex-start"
      >
        <Box borderBottom="2px solid" borderColor="gray.300" h="10%" w="100%">
          <Heading size="sm" mb="2">
            Inbox
          </Heading>
          <Button
            leftIcon={<EmailIcon />}
            color="white"
            bg="#82BA27"
            fontSize={{ base: "10px", md: "18px" }}
            w="100%"
            mt={{ base: "3", md: "5" }}
          >
            Compose
          </Button>
        </Box>

        <Box w="100%" borderBottom="2px solid" borderColor="gray.300" h="30%">
          <VStack
            align="flex-start"
            spacing="4"
            fontSize={{ base: "10px", md: "18px" }}
          >
            <HStack w="100%" justifyContent="space-between">
              <Text
                fontWeight="bold"
                color="#82BA27"
                onClick={handleInboxClick}
                cursor="pointer"
              >
                Inbox
              </Text>
              <Text color="green.500">5</Text>
            </HStack>
            <Text>Sent</Text>
            <Text>Drafts</Text>
            <HStack w="100%" justifyContent="space-between">
              <Text>Trash</Text>
              <Text color="green.500">2</Text>
            </HStack>
            <Text>Important</Text>
          </VStack>
        </Box>
        <Box mt="20%" w="100%">
          <Heading size="sm" mb="2">
            Tag
          </Heading>
          <VStack align="flex-start" spacing="5">
            <Tag colorScheme="purple">Sales</Tag>
            <Tag colorScheme="blue">Accounts</Tag>
            <Tag colorScheme="red">Support</Tag>
          </VStack>
        </Box>
      </VStack>

      {/* Main content */}
      <Box
      w={{base:"100%",md:"69%"}}
        display="flex"
        flexDirection="column"
        mt="30px"
        p={{ base: "2", md: "8" }}
      >
        <HStack mb="8">
          <Input placeholder="Search Message or Name..." value={searchQuery} onChange={handleSearch} size={{base:"sm",md:"lg"}} />
          <IconButton aria-label="Search" icon={<SearchIcon />} />
        </HStack>

        <Divider mb="8" />
        <Box display="flex" flex="1">
          {(isLargerScreen || !selectedMessage) && (
            <VStack
              align="flex-start"
              spacing="4"
              w={{ base: "100%", md: "30%" }}
              overflowY="auto"
              display={selectedMessage && !isLargerScreen ? "none" : "flex"}
            >
              {filteredMessages.map((message) => (
                <HStack
                  key={message.id}
                  w="100%"
                  p="4"
                  bg="white"
                  fontSize={{ base: "10px", md: "18px" }}
                  borderRadius="md"
                  _hover={{ bg: "gray.100" }}
                  onClick={() => setSelectedMessage(message)}
                  cursor="pointer"
                >
                  <Avatar src={message.avatar} />
                  <Box flex="1">
                    <HStack justifyContent="space-between">
                      <Text fontWeight="bold">{message.sender}</Text>
                      <Text color="gray.500">{message.date}</Text>
                    </HStack>
                    <Text color="gray.500">{message.snippet}</Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          )}

          {selectedMessage && (
            <Box
              flex="1"
              ml={{ base: 0, md: "4" }}
              display="flex"
              flexDirection="column"
              fontSize={{ base: "10px", md: "18px" }}
              w="100%"
            >
              <HStack mb="4">
                <Badge colorScheme="red">{selectedMessage.tag}</Badge>
                <Heading size="md">{selectedMessage.subject}</Heading>
              </HStack>
              <HStack mb="4">
                <Avatar src={selectedMessage.avatar} />
                <VStack align="flex-start">
                  <Text fontWeight="bold">{selectedMessage.sender}</Text>
                  <Text color="gray.500">to me</Text>
                </VStack>
                <Text ml="auto" color="gray.500">
                  {selectedMessage.date}
                </Text>
              </HStack>
              <Divider mb="4" />
              <Text mb="8">{selectedMessage.body}</Text>
              <Box
                p="4"
                border="1px solid"
                borderColor="gray.300"
                borderRadius="md"
                cursor="pointer"
                _hover={{ bg: "gray.100" }}
              >
                Click here to Reply
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Inbox;
