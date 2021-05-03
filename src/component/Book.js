import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({ books, deleteBook }) => (
  <>
    {books.map((book) => (
      <tr key={book.id}>
        <td>{book.id}</td>
        <td>{book.title}</td>
        <td>{book.category}</td>
        <td>
          <button
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
};

const mapStateToProps = (state) => ({
  books: state.booksReducer,
});

export default connect(mapStateToProps)(Book);
