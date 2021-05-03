import React from 'react';
import Book from '../component/Book';

const BooksList = () => (
  <div className="container">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody><Book /></tbody>
    </table>
  </div>
);

export default BooksList;
