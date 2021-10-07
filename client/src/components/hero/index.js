import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import React, { Fragment } from 'react';
import {
  Box,
  Flex,
  Heading,
  Spinner,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import { Container1000 } from '../globals/Container';

const Hero = () => {
  const { loading, error, data } = useQuery(queries.heroQueries.hero);
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Box bgColor='blue.100' py={[2, 4]}>
      <Container1000>
        {/* Main Hero Section */}
        <Flex justifyContent='center' alignItems='center' minH='200px'>
          {loading && <Spinner size='xl' />}
          {!loading && (
            <Fragment>
              <Heading
                w={['100%', '40%']}
                color='blue.800'
                textAlign='center'
                mr={[0, 4]}
              >
                {data.hero[0].text}
              </Heading>
              {isLargerThan768 && (
                <Image
                  w='250px'
                  h='250px'
                  objectFit='contain'
                  src={data.hero[0].image}
                />
              )}
            </Fragment>
          )}
        </Flex>
      </Container1000>
    </Box>
  );
};

export default Hero;
