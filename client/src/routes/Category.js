import React from 'react';

const Category = (props) => {
  console.log(props.match.params);
  return (
    <div>
      <h1>This is Category</h1>
    </div>
  );
};

export default Category;
