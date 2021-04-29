import * as types from './types';

export const addBook = ({ id, title, category }) => ({
  type: types.ADD_BOOK,
  payload: {
    id,
    title,
    category,
  },
});

export const removeBook = ({ id }) => ({
  type: types.REMOVE_BOOK,
  payload: id,
});
