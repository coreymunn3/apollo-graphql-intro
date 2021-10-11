import { gql } from '@apollo/client';

export const categoryQueries = {
  allCategories: gql`
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
  categoriesContentTable: gql`
    query {
      categories {
        id
        categoryName
        createdAt
        updatedAt
      }
    }
  `,
  categoryById: gql`
    query ($categoryId: String) {
      category(id: $categoryId) {
        id
        categoryName
        slug
        image
      }
    }
  `,
};
