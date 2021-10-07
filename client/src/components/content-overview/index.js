import { Box, Flex, Spacer } from '@chakra-ui/layout';
import { Button } from '@chakra-ui/button';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/tabs';
import ContentTable from '../content-table';
import Loading from '../loading';
import { useQuery } from '@apollo/client';
import { queries } from '../../graphql';

const UnpaddedTabPanel = (props) => <TabPanel px={0} {...props} />;

const ContentOverview = () => {
  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useQuery(queries.productQueries.productsContentTable);

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useQuery(queries.categoryQueries.categoriesContentTable);

  const {
    data: mainCardData,
    loading: mainCardLoading,
    error: mainCardError,
  } = useQuery(queries.mainCardQueries.mainCardsContentTable);

  const {
    data: heroData,
    loading: heroLoading,
    error: heroError,
  } = useQuery(queries.heroQueries.hero);

  console.log(heroData);

  return (
    <Box>
      <Tabs variant='line'>
        <Flex direction={['column-reverse', 'row']}>
          <TabList mb={2}>
            <Tab>Categories</Tab>
            <Tab>Produst Listings</Tab>
            <Tab>Main Cards</Tab>
            <Tab>Hero Content</Tab>
          </TabList>
          <Spacer />
          <Button variant='solid' colorScheme='yellow' mb={2}>
            Add Content
          </Button>
        </Flex>

        <TabPanels>
          <UnpaddedTabPanel>
            {categoryLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={categoryData.categories} />
            )}
          </UnpaddedTabPanel>
          <UnpaddedTabPanel>
            {productLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={productData.products} />
            )}
          </UnpaddedTabPanel>
          <UnpaddedTabPanel>
            {mainCardLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={mainCardData.mainCards} />
            )}
          </UnpaddedTabPanel>
          <UnpaddedTabPanel>
            {heroLoading ? (
              <Loading />
            ) : (
              <ContentTable contentList={heroData.hero} />
            )}
          </UnpaddedTabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default ContentOverview;
