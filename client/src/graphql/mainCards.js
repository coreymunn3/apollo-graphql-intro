import { gql } from '@apollo/client';

export const mainCardQueries = {
  allMainCards: gql`
    query {
      mainCards {
        title
        images
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
};
