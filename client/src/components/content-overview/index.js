import { Box, Flex } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/tabs';
import ContentTable from '../content-table';
import Loading from '../loading';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';

const ContentOverview = () => {
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useQuery(queries.productsContentTable);

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useQuery(queries.categories);

  console.log(categoryData);

  return (
    <Box>
      <Tabs variant='line'>
        <Flex direction={['column-reverse', 'row']}>
          <TabList flex={1} mb={2}>
            <Tab>Categories</Tab>
            <Tab>Produst Listings</Tab>
          </TabList>
          <Button variant='solid' colorScheme='yellow' mb={2}>
            Add Content
          </Button>
        </Flex>

        <TabPanels>
          <TabPanel px={0}>
            {categoryLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={categoryData.categories} />
            )}
          </TabPanel>
          <TabPanel px={0}>
            {productLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={productData.products} />
            )}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ContentOverview;
