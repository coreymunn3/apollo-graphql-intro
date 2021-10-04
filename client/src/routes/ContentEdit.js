import React from 'react';
import { useParams } from 'react-router';
import Container1000 from '../components/globals/Container';

const ContentEdit = () => {
  const { contentId } = useParams();
  console.log(contentId);
  return (
    <Container1000>
      <h1>Edit your content here</h1>
    </Container1000>
  );
};

export default ContentEdit;
