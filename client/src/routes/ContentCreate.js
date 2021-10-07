import React from 'react';
import Container1000 from '../components/globals/Container';
import { ProductForm } from '../components/content-form';

const ContentCreate = () => {
  return (
    <Container1000>
      <h1>Create New Content</h1>
      {/* select dropdown to choose which type of content to create */}
      {/* content creation form (reused from edit) with blank defaults. For now, I'll leave the product form hard-coded */}
      <ProductForm />
    </Container1000>
  );
};

export default ContentCreate;
