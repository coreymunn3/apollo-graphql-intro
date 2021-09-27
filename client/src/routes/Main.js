import React, { Fragment } from 'react';
import Hero from '../components/hero';
import MainCards from '../components/main-cards';
import CategoryList from '../components/category-list';

const Main = () => {
  return (
    <Fragment>
      <Hero />
      <MainCards />
      <CategoryList />
    </Fragment>
  );
};

export default Main;
