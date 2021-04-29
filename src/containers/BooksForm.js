/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = ({ title }) => (
  <>
    <form>
      <input
        type="text"
        name="id"
        id="id"
        placeholder="Id"
        value={title}
      />
      <select name="category" id="category">
        {categories.map((category, id) => <option key={id}>{category}</option>)}
      </select>
      <input type="submit" value="Submit" />
    </form>
  </>
);

BooksForm.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BooksForm;
