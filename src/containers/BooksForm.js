/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../redux/actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BooksForm = ({ createBook }) => {
  const [form, setState] = useState({
    title: '',
    category: 'Action',
  });

  const handleChange = (e) => setState({
    ...form,
    [e.target.name]: e.target.value,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = {
      title: form.title,
      category: form.category,
    };
    createBook(book);
    setState({
      title: '',
      category: 'Action',
    });
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          value={form.title}
          onChange={(e) => handleChange(e)}
        />
        <select name="category" id="category" value={form.category} onChange={(e) => handleChange(e)}>
          {categories.map((category, id) => (
            <option key={id}>{category}</option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksForm);
