import React from 'react';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Box, SimpleGrid } from '@chakra-ui/react';
import MainCard from '../main-card';
import Container1000 from '../globals/Container';
import Loading from '../loading';

const MainCards = () => {
  const { loading, error, data } = useQuery(
    queries.mainCardQueries.allMainCards
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <Box bg='linear-gradient(rgb(190, 227, 248), #EDF2F7)'>
      <Container1000>
        <SimpleGrid columns={[1, 3]} spacing={2} gridAutoRows='1fr'>
          {data.mainCards.map((card) => (
            <MainCard
              title={card.title}
              images={card.images}
              key={card.title}
            />
          ))}
        </SimpleGrid>
      </Container1000>
    </Box>
  );
};

export default MainCards;
