import { gql } from '@apollo/client';

export const categoryMutations = {
  updateCategory: gql`
    mutation (
      $updateCategoryId: ID!
      $updateCategoryCategoryName: String
      $updateCategorySlug: String
      $updateCategoryImage: String
    ) {
      updateCategory(
        id: $updateCategoryId
        categoryName: $updateCategoryCategoryName
        slug: $updateCategorySlug
        image: $updateCategoryImage
      ) {
        id
        categoryName
        slug
        image
      }
    }
  `,
};
