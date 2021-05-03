import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBook } from '../redux/actions';
import Book from '../component/Book';

const BooksList = ({ removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  return (
    <div className="container">
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
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
});

export default connect(null, mapDispatchToProps)(BooksList);
