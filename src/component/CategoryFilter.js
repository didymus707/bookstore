/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

const CategoryFilter = ({ filterBook }) => {
  const [value, setValue] = useState('All');

  const handleSelect = (e) => {
    setValue(e.target.value);
    filterBook(e.target.value);
  };

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

CategoryFilter.propTypes = {
  filterBook: PropTypes.func.isRequired,
};

export default CategoryFilter;
