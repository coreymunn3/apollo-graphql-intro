import {
  Box,
  Stack,
  Divider,
  Flex,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link as ChakraLink,
} from '@chakra-ui/layout';
import { Image } from '@chakra-ui/image';
import { Button } from '@chakra-ui/button';
import StarRating from '../star-rating';
import { formatter } from '../../utils';

const ProductPage = ({ product }) => {
  const {
    category,
    description,
    name,
    id,
    image,
    onSale,
    price,
    rating,
    stock,
  } = product;

  const formattedPrice = formatter.format(price);
  let deliveryDate = new Date();
  deliveryDate.setDate(deliveryDate.getDate() + 2);

  return (
    <Flex direction={['column', 'row']}>
      <Box w={['100%', '40%']}>
        <Image position='sticky' src={image} h='auto' w='100%' />
      </Box>
      <Flex w={['100%', '60%']}>
        <Box w={'60%'} mx={4}>
          <Heading size='md'>{name}</Heading>
          <StarRating rating={rating} />
          <Text fontSize='md'>{formattedPrice}</Text>
          <Divider />
          <Box my={4}>
            <Heading size='sm'>About This Item</Heading>
            <UnorderedList>
              {description.map((desc) => (
                <ListItem>{desc}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </Box>
        <Box mx={4} w={'40%'}>
          <Stack
            border='1px solid'
            borderColor='gray.200'
            borderRadius='5px'
            p={4}
          >
            <Heading size='md' color='red.500'>
              {formattedPrice}
            </Heading>
            <Text>
              Get <strong>Fast, Free Shipping</strong> with{' '}
              <ChakraLink>Amazon Prime & FREE returns</ChakraLink>
            </Text>
            <Text>
              Free Delivery by{' '}
              {deliveryDate.toLocaleString('en-US', {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
              })}{' '}
              if you order now!
            </Text>
            <Heading size='md' color={stock > 5 ? 'green.400' : 'red.400'}>
              {stock > 5 ? 'In Stock' : `Only ${stock} remaining!`}
            </Heading>
            <Button variant='buyNow' colorScheme='yellow'>
              Add To Cart
            </Button>
          </Stack>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProductPage;
