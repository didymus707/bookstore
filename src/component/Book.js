import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Book = ({ books, deleteBook, filter }) => (
  <>
    {filter
      ? books.filter((book) => book.category === filter).map((book) => (
        <div key={book.id}>
          <div className="each-book">
            <div className="book">
              <ul className="top-section">
                <li>
                  <small>{book.category}</small>
                </li>
                <li>{book.title}</li>
                <li>Jane Doe</li>
              </ul>
              <ul className="bottom-section">
                <li>Comments</li>
                <li>
                  <button
                    className="btn-text"
                    type="button"
                    onClick={() => deleteBook(book)}
                  >
                    Remove
                  </button>
                </li>
                <li>Edit</li>
              </ul>
            </div>
            <div className="progress-bar">
              progress circle
            </div>
            <div className="update-progress">
              <ul className="chapter">
                <li>CURRENT CHAPTER</li>
                <li>CHAPTER 17</li>
              </ul>
              <button type="submit" className="update">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      ))
      : books.map((book) => (
        <div key={book.id}>
          <div className="each-book">
            <div className="book">
              <ul className="top-section">
                <li>
                  <small>{book.category}</small>
                </li>
                <li>{book.title}</li>
                <li>Jane Doe</li>
              </ul>
              <ul className="bottom-section">
                <li>Comments</li>
                <li>
                  <button
                    className="btn-text"
                    type="button"
                    onClick={() => deleteBook(book)}
                  >
                    Remove
                  </button>
                </li>
                <li>Edit</li>
              </ul>
            </div>
            <div className="progress-bar">
              progress circle
            </div>
            <div className="update-progress">
              <ul className="chapter">
                <li>CURRENT CHAPTER</li>
                <li>CHAPTER 17</li>
              </ul>
              <button type="submit" className="update">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
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
