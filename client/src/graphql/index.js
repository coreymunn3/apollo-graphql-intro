import { productQueries } from './queries/products';
import { categoryQueries } from './queries/categories';
import { mainCardQueries } from './queries/mainCards';
import { heroQueries } from './queries/hero';
import { productMutations } from './mutations/products';
import { categoryMutations } from './mutations/category';

export const queries = {
  productQueries,
  categoryQueries,
  mainCardQueries,
  heroQueries,
};

export const mutations = {
  productMutations,
  categoryMutations,
};
