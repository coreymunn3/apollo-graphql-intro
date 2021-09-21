import React, { Fragment } from 'react';
import { Box, Container, Flex, Heading } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/spinner';
import { Image } from '@chakra-ui/image';
import { useQuery } from '@apollo/client';
import { queries } from '../graphql';

const Main = () => {
  const { loading, error, data } = useQuery(queries.hero);

  return (
    <Box bgColor='blue.100' py={4}>
      <Container maxW='1000px'>
        {/* Hero Section */}
        <Flex justifyContent='center' alignItems='center' minH='200px'>
          {loading && <Spinner size='xl' />}
          {!loading && (
            <Fragment>
              <Heading w='250px' color='white'>
                {data.hero.text}
              </Heading>
              <Image
                w='250px'
                h='250px'
                objectFit='contain'
                src={data.hero.image}
              />
            </Fragment>
          )}
        </Flex>
      </Container>
    </Box>
  );
};

export default Main;
