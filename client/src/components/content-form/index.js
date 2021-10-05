import { Text } from '@chakra-ui/layout';
import ProductForm from './ProductForm';

const ContentForm = ({ contentType }) => {
  // determine form to render based on type
  switch (contentType) {
    case 'Product':
      return <ProductForm />;
    // case 'Category':
    //   return <CategoryForm />;
    // case 'MainCard':
    //   return <MainCardForm />;
    // case 'Hero':
    //   return <HeroForm />
    // default:
    //   return <Text>Oops, this content type is not supported!</Text>
  }
};

export default ContentForm;
