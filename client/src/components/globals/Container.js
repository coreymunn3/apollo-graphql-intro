import React from 'react';
import { Container } from '@chakra-ui/layout';

export const Container1000 = ({ children }) => {
  return <Container maxW='1000px'>{children}</Container>;
};

export default Container1000;
