import { Box } from '@chakra-ui/layout';
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
      <Tabs variant='soft-rounded'>
        <TabList>
          <Tab>Categories</Tab>
          <Tab>Produst Listings</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {categoryLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={categoryData.categories} />
            )}
          </TabPanel>
          <TabPanel>
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
