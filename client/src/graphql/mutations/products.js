import { gql } from '@apollo/client';

export const productMutations = {
  updateProduct: gql`
    mutation (
      $updateProductId: ID!
      $updateProductName: String
      $updateProductSlug: String
      $updateProductImage: String
      $updateProductRating: Float
      $updateProductPrice: Float
      $updateProductDescription: [String]
      $updateProductStock: Int
      $updateProductOnSale: Boolean
      $updateProductSalePrice: Float
      $updateProductCategory: ID
    ) {
      updateProduct(
        id: $updateProductId
        name: $updateProductName
        slug: $updateProductSlug
        image: $updateProductImage
        rating: $updateProductRating
        price: $updateProductPrice
        description: $updateProductDescription
        stock: $updateProductStock
        onSale: $updateProductOnSale
        salePrice: $updateProductSalePrice
        category: $updateProductCategory
      ) {
        name
        slug
        image
        rating
        price
        description
        stock
        onSale
        salePrice
        category {
          categoryName
        }
      }
    }
  `,
};
