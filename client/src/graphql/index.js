import { gql } from '@apollo/client';

export const queries = {
  vehicles: gql`
    query {
      category(slug: "vehicles") {
        products {
          name
          image
        }
      }
    }
  `,
};
