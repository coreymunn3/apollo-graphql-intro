import React from 'react';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Box, SimpleGrid } from '@chakra-ui/react';
import MainCard from '../main-card';
import Container1000 from '../globals/Container';
import Loading from '../loading';

const MainCards = () => {
  const { loading, error, data } = useQuery(queries.mainCards);

  if (loading) {
    return <Loading />;
  }

  return (
    <Box bg='linear-gradient(rgb(190, 227, 248), #EDF2F7)' py={4}>
      <Container1000>
        <SimpleGrid columns={[1, 3]} spacing={2} gridAutoRows='1fr'>
          {data.mainCards.map((card) => (
            <MainCard title={card.title} images={card.images} />
          ))}
        </SimpleGrid>
      </Container1000>
    </Box>
  );
};

export default MainCards;
