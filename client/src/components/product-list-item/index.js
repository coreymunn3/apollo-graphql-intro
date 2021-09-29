import { Flex, Box, Stack, Heading, Text, Divider } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/image';
import { Fragment } from 'react';
import StarRating from '../star-rating';
import PriceDisplay from '../price-display';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';

const ProductListItem = ({ product }) => {
  const { id, slug, image, name, onSale, price, salePrice, rating } = product;
  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 2);
  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#ecc94b' }}>
        <Flex direction={'column'}>
          <Image
            src={image}
            width='100%'
            height='200px'
            mb={4}
            objectFit='cover'
          />
          <Box flex={1}>
            <Heading variant='link'>
              <Link to={`/products/${slug}`}>{name}</Link>
            </Heading>
            <StarRating rating={rating} />
            <PriceDisplay price={price} onSale={onSale} salePrice={salePrice} />
            <Flex alignItems='flex-start'>
              <FaCheck />
              <Text fontWeight='bold' color='blue.300'>
                prime
              </Text>
              &nbsp;
              <Text color='gray.400'>
                {' '}
                {`Get it as soon as ${deliveryDate.toLocaleDateString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                  month: 'short',
                })}`}
              </Text>
            </Flex>
            <Text marginTop='none' color='gray.400'>
              <strong>Free</strong> shipping by Amazon!
            </Text>
          </Box>
        </Flex>
      </IconContext.Provider>
    </Fragment>
  );
};

export default ProductListItem;
