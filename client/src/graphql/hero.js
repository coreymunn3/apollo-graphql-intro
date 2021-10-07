import { gql } from '@apollo/client';

export const heroQueries = {
  hero: gql`
    query {
      hero {
        id
        text
        image
        createdAt
        updatedAt
      }
    }
  `,
};
