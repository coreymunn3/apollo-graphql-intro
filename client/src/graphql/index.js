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
  categoryNames: gql`
    query {
      categories {
        categoryName
      }
    }
  `,
  productsByCategory: gql`
    query ($categorySlug: String!) {
      category(slug: $categorySlug) {
        id
        categoryName
        image
        slug
        products {
          id
          slug
          image
          name
          price
          rating
          onSale
        }
      }
    }
  `,
};
