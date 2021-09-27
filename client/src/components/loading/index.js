import { Box, Spinner } from '@chakra-ui/react';
import Container1000 from '../globals/Container';

const Loading = () => {
  return (
    <Container1000>
      <Box w='100%' h='200px' py={4}>
        <Spinner size='xl' />
      </Box>
    </Container1000>
  );
};

export default Loading;
