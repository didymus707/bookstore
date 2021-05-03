/* eslint-disable no-plusplus */
import * as types from './types';

let bookId = 0;

export const createBook = (book) => ({
  type: types.CREATE_BOOK,
  payload: {
    id: ++bookId,
    title: book.title,
    category: book.category,
  },
});

export const removeBook = (book) => ({
  type: types.REMOVE_BOOK,
  payload: { id: book.id },
});
