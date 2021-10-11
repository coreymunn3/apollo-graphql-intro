import React from 'react';
import { Text } from '@chakra-ui/layout';
import { useParams } from 'react-router';
import Container1000 from '../components/globals/Container';
import { ProductForm, CategoryForm } from '../components/content-form';

const ContentEdit = () => {
  const { contentType, contentId } = useParams();

  const renderBasedOnContentType = (contentType) => {
    switch (contentType) {
      case 'Product':
        return <ProductForm productId={contentId} />;
      case 'Category':
        return <CategoryForm categoryId={contentId} />;
      // case 'MainCard':
      //   return <MainCardForm />;
      // case 'Hero':
      //   return <HeroForm />
      default:
        return <Text>Oops, this content type is not supported!</Text>;
    }
  };

  return <Container1000>{renderBasedOnContentType(contentType)}</Container1000>;
};

export default ContentEdit;
