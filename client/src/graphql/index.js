import { gql } from '@apollo/client';
import { productQueries } from './products';
import { categoryQueries } from './categories';
import { mainCardQueries } from './mainCards';
import { heroQueries } from './hero';

export const queries = {
  productQueries,
  categoryQueries,
  mainCardQueries,
  heroQueries,
};
