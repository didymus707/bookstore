import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../component/Book';

const BooksList = ({ book }) => (
  <div>
    <table>
      <tr>
        <th>Id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
      <Book
        id={book.id}
        title={book.title}
        category={book.category}
      />
    </table>
  </div>
);

BooksList.propTypes = {
  book: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

const MapStateToProps = (state) => ({
  book: state.book,
});

export default connect(MapStateToProps, null)(BooksList);
