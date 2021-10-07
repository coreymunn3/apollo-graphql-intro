import { Box } from '@chakra-ui/layout';
import ProductPage from '../components/product-page';
import Container1000 from '../components/globals/Container';
import Loading from '../components/loading';
import { useQuery } from '@apollo/client';
import { queries } from '../graphql';

const Product = (props) => {
  const productSlug = props.match.params[0];
  console.log(productSlug);

  const { data, loading, error } = useQuery(
    queries.productQueries.productBySlug,
    {
      variables: {
        productSlug,
      },
    }
  );
  console.log(data);
  if (loading) {
    return <Loading />;
  }

  return (
    <Container1000>
      <ProductPage product={data.product} />
    </Container1000>
  );
};

export default Product;
