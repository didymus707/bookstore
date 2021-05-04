import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, removeBook } from '../redux/actions';
import Book from '../component/Book';
import CategoryFilter from '../component/CategoryFilter';

const BooksList = ({ removeBook, changeFilter }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <div className="container">
      <CategoryFilter filterBook={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove Book</th>
          </tr>
        </thead>
        <tbody>
          <Book deleteBook={handleRemoveBook} />
        </tbody>
      </table>
    </div>
  );
};

BooksList.propTypes = {
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

export default connect(null, mapDispatchToProps)(BooksList);
