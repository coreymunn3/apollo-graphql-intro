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
  },
});

export default customTheme;
