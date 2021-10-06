import { extendTheme } from '@chakra-ui/react';

const customTheme = extendTheme({
  components: {
    Heading: {
      baseStyle: {
        color: 'blue.700',
      },
      variants: {
        link: {
          fontSize: '20px',
          _hover: {
            color: 'blue.500',
          },
        },
      },
    },
    Text: {
      baseStyle: {
        margin: 'none',
      },
    },
    Link: {
      baseStyle: {
        color: 'blue.300',
      },
    },
    Button: {
      variants: {
        buyNow: {
          bgColor: 'yellow.300',
          _hover: {
            bgColor: 'yellow.400',
          },
          shadow: 'md',
          borderRadius: '20px',
        },
        'primary-dark': {
          bgColor: 'blue.700',
          color: 'white',
          _hover: {
            bgColor: 'blue.600',
          },
        },
      },
    },
  },
});

export default customTheme;
