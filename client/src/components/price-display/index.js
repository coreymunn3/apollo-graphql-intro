import { Text, Box } from '@chakra-ui/layout';
import { formatter } from '../../utils';

const PriceDisplay = ({ price, onSale, salePrice }) => {
  if (onSale) {
    return (
      <Box mb={2}>
        <Text as='span' fontSize='lg' fontWeight='bold'>
          {formatter.format(salePrice)}
        </Text>
        &nbsp;
        <Text
          as='span'
          fontSize='md'
          fontWeight='normal'
          textDecor='line-through'
          color='gray.300'
        >
          {formatter.format(parseFloat(price))}
        </Text>
      </Box>
    );
  }
  return (
    <Box mb={2}>
      <Text as='span' fontSize='lg' fontWeight='bold'>
        {formatter.format(price)}
      </Text>
    </Box>
  );
};

export default PriceDisplay;
