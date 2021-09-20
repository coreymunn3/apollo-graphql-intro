import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Box, Container, Flex, HStack } from '@chakra-ui/layout';
import { Button, IconButton } from '@chakra-ui/button';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/input';
import { Select } from '@chakra-ui/select';
import { AiOutlineAmazon, AiOutlineSearch } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  console.log(location);
  return (
    <Box bgColor='blue.900'>
      <Container maxW='1000px'>
        <Flex direction='row' padding={2}>
          <Box flex={1} d='flex' alignItems='center'>
            <Box mr={6}>
              <AiOutlineAmazon size={'2rem'} color='white' />
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
                  <option value={'cat 1'}>Cat 1</option>
                  <option value={'cat 2'}>Cat 2</option>
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
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navbar;
