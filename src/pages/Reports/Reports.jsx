import React from "react";
import PageWrapper from "../../components/RoutesPageWrapper";
import {
  Box,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Overall from "./Overall";

const Reports = () => {
  return (
    <PageWrapper
      rightChildren={
        <>
          <Box mb={6} w={{ base: "100%", md: "100%", lg: "100%" }}>
            <Tabs size={{base:"sm",md:"md"}}>
              <HStack justifyContent="space-between" bg="white" p="10px">
                <Text mb={3} fontSize={{ base: "10px" ,md:"18px"}}>
                  Your income and expenses
                </Text>
                <TabList>
                  <Tab>overall</Tab>
                  <Tab>Cards</Tab>
                  <Tab>Deposits</Tab>
                </TabList>
              </HStack>

              <TabPanels>
                <TabPanel>
                  <Overall />
                </TabPanel>
                <TabPanel>
                  <Overall />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <hr />
          </Box>
        </>
      }
    />
  );
};

export default Reports;
