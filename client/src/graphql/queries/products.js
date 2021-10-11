import { gql } from '@apollo/client';

export const productQueries = {
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
          salePrice
        }
      }
    }
  `,
  productBySlug: gql`
    query ($productSlug: String!) {
      product(slug: $productSlug) {
        id
        name
        image
        description
        price
        onSale
        salePrice
        rating
        stock
        category {
          categoryName
          slug
        }
      }
    }
  `,
  productById: gql`
    query ($productId: String!) {
      product(id: $productId) {
        name
        slug
        image
        description
        rating
        stock
        price
        onSale
        salePrice
        category {
          id
        }
      }
    }
  `,
  productsContentTable: gql`
    query {
      products {
        id
        name
        createdAt
        updatedAt
      }
    }
  `,
};
