import { Box, HStack, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import data from '../../data/data.json'
import accountData from '../../data/accountData.json'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  Line } from 'recharts';


const Overall = () => {
  return (
    <Box w='100%'>

      <Box bg='white' w='100%' >
        <BarChart width={1200} height={250} data={data}  >
          <CartesianGrid strokeDasharray="2 3" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="income"  fill="#82BA26" />
          <Bar dataKey="expenses"  fill="#194D5B" />
        </BarChart>
      </Box>
      <Box>

        <HStack justifyContent='space-around' mt='20px' w='100%' gap='20px'>
          <Box mb={10} bg='white' flex={1}>
            <Text size="md" p='10px'>Spendings per month</Text>
            <hr/>
            <BarChart width={800} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar  dataKey="expenses" fill="#82BA26" />
              {/* <Line type="monotone" dataKey="expenses" stroke="#8884d8" /> */}
            </BarChart>
          </Box>
          <Box mb={10} bg='white' flex={1}>
            <Text size="md"  p='10px'>Account spendings</Text>
            <hr/>
            <BarChart width={600} height={300} data={accountData} layout='vertical'>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type='number' />
              <YAxis type='category'  dataKey='name'/>
              <Tooltip />
              <Legend />
        
              <Bar dataKey="amount"  fill="#8884d8" />
            </BarChart>
          </Box>
        </HStack>
      </Box>
    </Box>

  )
}

export default Overall