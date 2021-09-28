import { Box } from '@chakra-ui/layout';
import ProductPage from '../components/product-page';
import Container1000 from '../components/globals/Container';
import Loading from '../components/loading';
import { useQuery } from '@apollo/client';
import { queries } from '../graphql';

const Product = (props) => {
  const productSlug = props.match.params[0];
  console.log(productSlug);

  const { data, loading, error } = useQuery(queries.productBySlug, {
    variables: {
      productSlug,
    },
  });
  console.log(data);
  if (loading) {
    return <Loading />;
  }

  return (
    <Box py={4}>
      <Container1000>
        <ProductPage product={data.product} />
      </Container1000>
    </Box>
  );
};

export default Product;
