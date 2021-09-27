import { Flex, Box, Stack, Heading, Text, Divider } from '@chakra-ui/layout';
import { Link, useLocation } from 'react-router-dom';
import { Image } from '@chakra-ui/image';
import { formatter } from '../../utils';
import { Fragment } from 'react';
import StarRating from '../star-rating';
import { IconContext } from 'react-icons';
import { FaCheck } from 'react-icons/fa';

const ProductListItem = ({ product }) => {
  const location = useLocation();
  const { id, slug, image, name, onSale, price, rating } = product;
  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 2);
  return (
    <Fragment>
      <IconContext.Provider value={{ color: '#ecc94b' }}>
        <Flex direction={['column', 'row']}>
          <Image
            src={image}
            width={['100%', '200px']}
            height={'150px'}
            mr={4}
            objectFit='cover'
          />
          <Box flex={1}>
            <Heading variant='link'>
              <Link to={`${location.pathname}/${slug}`}>{name}</Link>
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
            <Flex alignItems='center'>
              <FaCheck color='' />
              <Text fontWeight='bold' color='blue.300'>
                prime
              </Text>
              &nbsp;
              <Text>{`Get it as soon as ${deliveryDate.toLocaleDateString()}`}</Text>
            </Flex>
            <Text marginTop='none' color='gray.300'>
              <strong>Free</strong> shipping by Amazon!
            </Text>
          </Box>
        </Flex>
        <Divider />
      </IconContext.Provider>
    </Fragment>
  );
};

export default ProductListItem;
