import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const books = [
  {
    id: Math.floor(Math.random() * 100),
    title: 'The Diary of Anne Frank',
    category: 'Biography',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'To Kill A Mockingbird',
    category: 'Fiction',
  },
  {
    id: Math.floor(Math.random() * 100),
    title: 'Killing England',
    category: 'History',
  },
];

const booksReducer = (state = books, action) => {
  const { payload } = action;
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: payload.id,
          title: payload.title,
          category: payload.category,
        },
      ];
    case REMOVE_BOOK:
      return [
        state.filter((book) => book.id !== payload.id),
      ];
    default:
      return state;
  }
};

export default booksReducer;
