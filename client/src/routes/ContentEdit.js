import React from 'react';
import { useParams, useLocation } from 'react-router';
import Container1000 from '../components/globals/Container';
import ContentForm from '../components/content-form';
import { useQuery } from '@apollo/client';
import { queries } from '../graphql';

const ContentEdit = () => {
  const { contentType, contentId } = useParams();

  // run query based on content
  // add "find by id" queries for every content type!

  // const {data, loading, error } = useQuery(queries.findById(contentId))

  return (
    <Container1000>
      <ContentForm contentType={contentType} />
    </Container1000>
  );
};

export default ContentEdit;
