import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import React, { Fragment } from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Spinner,
  Image,
} from '@chakra-ui/react';

const Hero = () => {
  const { loading, error, data } = useQuery(queries.hero);
  console.log(data);
  return (
    <Box bgColor='blue.100' py={4}>
      <Container maxW='1000px'>
        {/* Main Hero Section */}
        <Flex justifyContent='center' alignItems='center' minH='200px'>
          {loading && <Spinner size='xl' />}
          {!loading && (
            <Fragment>
              <Heading w='40%' color='blue.800' textAlign='center' mr={4}>
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

export default Hero;
