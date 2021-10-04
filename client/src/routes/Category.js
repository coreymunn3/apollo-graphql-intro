import { Box, Heading, Stack, SimpleGrid } from '@chakra-ui/layout';
import { useQuery } from '@apollo/client';
import { queries } from '../graphql';
import Container1000 from '../components/globals/Container';
import Loading from '../components/loading';
import ProductListItem from '../components/product-list-item';

const Category = (props) => {
  const urlSlug = props.match.params[0];
  const { data, loading, error } = useQuery(queries.productsByCategory, {
    variables: {
      categorySlug: urlSlug,
    },
  });

  // console.log(data);

  if (loading) {
    return <Loading />;
  }
  return (
    <Container1000>
      <Heading mb={2} color='blue.700'>{`Browse ${urlSlug}`}</Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={4}>
        {data.category.products.map((prod) => (
          <ProductListItem product={prod} key={prod.id} />
        ))}
      </SimpleGrid>
    </Container1000>
  );
};

export default Category;
