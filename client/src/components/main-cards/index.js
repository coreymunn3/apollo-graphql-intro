import React from 'react';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Box, Flex, SimpleGrid, Container, Spinner } from '@chakra-ui/react';
import MainCard from '../main-card';

const MainCards = () => {
  const { loading, error, data } = useQuery(queries.mainCards);

  if (loading) {
    return (
      <Box
        w='100%'
        h='200px'
        bg='linear-gradient(rgb(190, 227, 248), #fff)'
        py={4}
      >
        <Spinner size='xl' />
      </Box>
    );
  }

  return (
    <Box bg='linear-gradient(rgb(190, 227, 248), #fff)' py={4}>
      <Container maxW='1000px'>
        <Flex justifyContent='center'>
          <SimpleGrid columns={3} spacing={2}>
            {data.mainCards.map((card) => (
              <MainCard title={card.title} images={card.images} />
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default MainCards;
