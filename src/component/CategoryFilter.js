/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = () => {
  const [value, setValue] = useState('All');

  const handleSelect = (e) => setValue(e.target.value);

  return (
    <>
      <form>
        <select name="category" id="category" value={value} onChange={(e) => handleSelect(e)}>
          {categories.map((category, id) => (
            <option key={id}>{category}</option>
          ))}
        </select>
      </form>
    </>
  );
};

export default CategoryFilter;
