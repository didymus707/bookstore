/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const [input, setInput] = useState('');

  const handleInput = (e) => setInput(e.target.value);

  return (
    <>
      <form>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={input}
          onChange={(e) => handleInput(e)}
        />
        <select name="category" id="category">
          {categories.map((category, id) => <option key={id}>{category}</option>)}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default BooksForm;
