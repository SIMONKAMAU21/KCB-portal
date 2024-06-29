import React from 'react'
import PageWrapper from '../../components/RoutesPageWrapper'
import { Box, HStack, Heading, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import data from '../../data/data.json';
import accountData from '../../data/accountData.json'
import Overall from './Overall';

const Reports = () => {
  return (
    <PageWrapper
      rightChildren={<>
          <Box mb={6} w={{base:'40%' ,md :'100%' ,lg:'100%'}} >
            <Tabs>
              <HStack justifyContent='space-between' bg='white' p='10px'>
            <Text size="md" mb={3}>Your income and expenses</Text>
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
                  <Overall/>
                </TabPanel>

              </TabPanels>
            </Tabs>
            <hr />
          </Box>

      </>}
    />
  )
}

export default Reports