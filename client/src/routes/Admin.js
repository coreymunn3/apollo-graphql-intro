import { Box } from '@chakra-ui/layout';
import Container1000 from '../components/globals/Container';
import ContentOverview from '../components/content-overview';

const Admin = () => {
  return (
    <Box py={4}>
      <Container1000>
        {/* content search bar */}
        <ContentOverview />
      </Container1000>
    </Box>
  );
};

export default Admin;
