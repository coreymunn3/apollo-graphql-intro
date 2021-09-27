import React, { Fragment } from 'react';
import Hero from '../components/hero';
import MainCards from '../components/main-cards';
import CategoryList from '../components/category-list';

const Main = () => {
  return (
    <div>
      <Hero />
      <MainCards />
      <CategoryList />
    </div>
  );
};

export default Main;
