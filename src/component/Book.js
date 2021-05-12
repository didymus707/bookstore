import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({ books, deleteBook, filter }) => (
  <>
    {filter
      ? books.filter((book) => book.category === filter).map((book) => (
        <tr key={book.id}>
          <td>{book.title}</td>
          <td>{book.category}</td>
          <td>
            <button
              className="button"
              type="button"
              onClick={() => deleteBook(book)}
            >
              Remove Book
            </button>
          </td>
        </tr>
      ))
      : books.map((book) => (
        <tr key={book.id}>
          <td>{book.id}</td>
          <td>{book.title}</td>
          <td>{book.category}</td>
          <td>
            <button
              className="button"
              type="button"
              onClick={() => deleteBook(book)}
            >
              Remove Book
            </button>
          </td>
        </tr>
      ))}
  </>
);

Book.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
  filter: state.filterReducer,
});

export default connect(mapStateToProps)(Book);
