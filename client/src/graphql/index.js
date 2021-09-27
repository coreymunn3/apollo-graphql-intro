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
  mainCards: gql`
    query {
      mainCards {
        title
        images
      }
    }
  `,
  categories: gql`
    query {
      categories {
        id
        categoryName
        slug
        image
      }
    }
  `,
};
