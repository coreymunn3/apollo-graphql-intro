import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Heading } from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';

const CategoryCard = ({ category }) => {
  console.log(category);
  return (
    <Stack bgColor='white'>
      <Heading
        mb={2}
        size='md'
        textAlign='center'
        color='blue.700'
        _hover={{ textDecoration: 'underline' }}
      >
        <Link to={'/category/' + category.slug}>{category.categoryName}</Link>
        <Box p={4}>
          <Image src={category.image} height='200px' objectFit='cover' />
        </Box>
      </Heading>
    </Stack>
  );
};

export default CategoryCard;
