import React from 'react';
import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';

export const Container1000 = ({ children, ...props }) => {
  return (
    <Box py={4} {...props}>
      <Container maxW='1000px'>{children}</Container>
    </Box>
  );
};

export default Container1000;
