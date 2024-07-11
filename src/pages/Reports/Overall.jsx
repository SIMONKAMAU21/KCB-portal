import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import data from '../../data/data.json';
import accountData from '../../data/accountData.json';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Overall = () => {
  const getBarSize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 1200) return 40;
    if (screenWidth > 768) return 20;
    return 10;
  };

  return (
    <Box w='100%' p={{ base: 1, md: 4 }}>
      <Box bg='white' w='100%' p={{ base: 2, md: 4 }} boxShadow='md' borderRadius='md' >
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} width={"100%"}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="income" fill="#82BA26" barSize={getBarSize()} />
            <Bar dataKey="expenses" fill="#194D5B" barSize={getBarSize()} />
          </BarChart>
        </ResponsiveContainer>
      </Box>

      <HStack
        justifyContent='space-around'
        mt='20px'
        w='100%'
        gap='20px'
        flexDirection={{ base: 'column', md: 'row' }}
      >
        <Box
          mb={10}
          bg='white'
          flex={1}
          p={{ base: 2, md: 4 }}
          boxShadow='md'
          borderRadius='md'
          width={{ base: '100%', md: '50%' }}
        >
          <Text size="md" p='10px'>Spendings per month</Text>
          <hr />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="expenses" fill="#82BA26" barSize={getBarSize()} />
            </BarChart>
          </ResponsiveContainer>
        </Box>

        <Box
          mb={10}
          bg='white'
          flex={1}
          p={{ base: 2, md: 4 }}
          boxShadow='md'
          borderRadius='md'
          width={{ base: '100%', md: '50%' }}
        >
          <Text size="md" p='10px'>Account spendings</Text>
          <hr />
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={accountData} layout='vertical'>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type='number' />
              <YAxis type='category' dataKey='name' />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" barSize={getBarSize()} />
            </BarChart>
          </ResponsiveContainer>
        </Box>
      </HStack>
    </Box>
  );
}

export default Overall;
