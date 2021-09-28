import { Flex, Box, Stack, Heading, Text, Divider } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';
import { Image } from '@chakra-ui/image';
import { formatter } from '../../utils';
import { Fragment } from 'react';
import StarRating from '../star-rating';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';

const ProductListItem = ({ product }) => {
  const { id, slug, image, name, onSale, price, rating } = product;
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
            mr={4}
            objectFit='cover'
          />
          <Box flex={1}>
            <Heading variant='link'>
              <Link to={`/products/${slug}`}>{name}</Link>
            </Heading>
            <StarRating rating={rating} />
            <Box mb={2}>
              <Text fontSize='lg' fontWeight='bold' as='span'>
                {formatter.format(price)}
              </Text>
              &nbsp;
              {onSale && (
                <Text as='span' textDecor='line-through' color='gray.300'>
                  {formatter.format(parseFloat(price) + 50)}
                </Text>
              )}
            </Box>
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
