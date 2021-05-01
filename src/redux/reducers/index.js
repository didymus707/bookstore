import { combineReducers } from 'redux';
import booksReducer from './book';

const rootReducer = combineReducers({
  bookReducer: booksReducer,
});

export default rootReducer;
