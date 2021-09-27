import React from 'react';
import { Box, SimpleGrid, Heading } from '@chakra-ui/layout';
import Container1000 from '../globals/Container';
import CategoryCard from '../category-card';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Spinner } from '@chakra-ui/react';

const CategoryList = () => {
  const { data, loading, error } = useQuery(queries.categories);
  return (
    <Box bgColor='gray.100'>
      <Container1000>
        <Heading mb={2} size='lg' color='blue.700'>
          Browse by Category
        </Heading>
        {loading ? (
          <Spinner />
        ) : (
          <SimpleGrid columns={[1, 3]} gap={2}>
            {data.categories.map((cat) => (
              <CategoryCard category={cat} key={cat.id} />
            ))}
          </SimpleGrid>
        )}
      </Container1000>
    </Box>
  );
};

export default CategoryList;
