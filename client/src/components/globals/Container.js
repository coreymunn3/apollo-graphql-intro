import React from 'react';
import { Container } from '@chakra-ui/layout';

export const Container1000 = ({ children, ...props }) => {
  return (
    <Container maxW='1000px' {...props}>
      {children}
    </Container>
  );
};

export default Container1000;
