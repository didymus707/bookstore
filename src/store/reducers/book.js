import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const books = [];

const booksReducer = (state = books, action) => {
  const { id, title, category } = action.payload;
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        id: id + 1,
        title,
        category,
      };
    case REMOVE_BOOK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default booksReducer;
