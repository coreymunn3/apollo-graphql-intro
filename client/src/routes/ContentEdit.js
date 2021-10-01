import React from 'react';
import { useParams } from 'react-router';

const ContentEdit = () => {
  const { contentId } = useParams();
  console.log(contentId);
  return (
    <div>
      <h1>Edit your content here</h1>
    </div>
  );
};

export default ContentEdit;
