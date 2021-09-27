import React from 'react';
import { Box, Stack, Heading, SimpleGrid, Image } from '@chakra-ui/react';

const MainCard = (props) => {
  const { title, images } = props;
  return (
    <Box p={2} h='100%' bgColor='white'>
      <Stack>
        <Heading mb={2} size='md' textAlign='center' color='blue.700'>
          {title}
        </Heading>
        <SimpleGrid columns={2} spacing={2}>
          {images.map((image) => (
            <Box>
              <Image src={image} objectFit='cover' w='120px' h='120px' />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

export default MainCard;
