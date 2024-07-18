import React from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  IconButton,
  Wrap,
  Grid,
  GridItem,
  WrapItem,
  useBreakpointValue,
} from "@chakra-ui/react";
import { PlusSquareIcon } from '@chakra-ui/icons';
// import CreditCard from '../../../components/CreditCard';
import master from '../../../assets/master.png';
import visa from '../../../assets/visa.png';
import CreditCard from '../../../components/Creditcard';

const cardData = [
  { src: visa, name: "William Situma", last4Digits: "4923", expDate: "20/20" },
  { src: master, name: "William Situma", last4Digits: "6121", expDate: "20/20" },
  { src: master, name: "William Situma", last4Digits: "6121", expDate: "20/20" },
];

const Cards = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box width={{base:"100%",md:"85%"}}  p={4} h="100%">
      <Heading as="h5" size="sm" mb={4}>
        Payment Methods
      </Heading>
      <HStack mb={4}>
        <Text>Cards</Text>
        <IconButton
          icon={<PlusSquareIcon />}
          variant="ghost"
          size="md"
          aria-label="Add new card"
        />
      </HStack>

      <Grid gap={2} templateColumns={{base:"1fr",md:"repeat(2,1fr)"}}>
        {cardData.map((card, index) => (
          <GridItem key={index}>
            <CreditCard
              src={card.src}
              name={card.name}
              last4Digits={card.last4Digits}
              expDate={card.expDate}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}

export default Cards;
