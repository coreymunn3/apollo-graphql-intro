import { gql } from '@apollo/client';

export const queries = {
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
  mainCardsContentTable: gql`
    query {
      mainCards {
        id
        title
        createdAt
        updatedAt
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
};
