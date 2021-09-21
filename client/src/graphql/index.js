import { gql } from '@apollo/client';

export const queries = {
  hero: gql`
    query {
      hero {
        text
        image
      }
    }
  `,
};
