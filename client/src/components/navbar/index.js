import React from 'react';
import { Link as RouterLink, useLocation, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';
import { Box, Container, Flex, HStack } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import {
  AiOutlineAmazon,
  AiOutlineSearch,
  AiOutlineShoppingCart,
} from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  const { data, loading, error } = useQuery(queries.categoryNames);

  return (
    <Box bgColor='blue.900'>
      <Container maxW='1000px'>
        <Flex direction='row' padding={2}>
          <Box flex={1} d='flex' alignItems='center'>
            <Box mr={6}>
              <Link to='/'>
                <AiOutlineAmazon size={'2rem'} color='white' />
              </Link>
            </Box>

            {/* search bar */}
            <InputGroup maxW='500px'>
              <InputLeftElement w='6rem'>
                <Select
                  variant='filled'
                  placeholder='All'
                  defaultValue={'All'}
                  borderTopRightRadius={0}
                  borderBottomRightRadius={0}
                >
                  {data &&
                    data.categories.map((cat) => (
                      <option value={cat.categoryName}>
                        {cat.categoryName}
                      </option>
                    ))}
                </Select>
              </InputLeftElement>
              <Input
                pl='6.2rem'
                bgColor='white'
                outline='none'
                _focus={{ outline: 'none' }}
              />
              <InputRightElement>
                <IconButton
                  borderTopLeftRadius={0}
                  borderBottomLeftRadius={0}
                  aria-label='search'
                  icon={<AiOutlineSearch />}
                  colorScheme='yellow'
                />
              </InputRightElement>
            </InputGroup>
          </Box>
          <HStack>
            {/* <Button colorScheme='yellow'>Sign In</Button> */}
            {location.pathname === '/' && (
              <RouterLink to='/admin'>
                <Button>Manage Store Content</Button>
              </RouterLink>
            )}
            {location.pathname === '/admin' && (
              <RouterLink to='/'>
                <Button>Back To Store</Button>
              </RouterLink>
            )}
            <RouterLink to='/cart'>
              <Button variant='text' color='white'>
                <AiOutlineShoppingCart size='2rem' />
                {'0'}
              </Button>
            </RouterLink>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
