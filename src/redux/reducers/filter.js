import { CHANGE_FILTER } from '../actions/types';

const filter = 'ALL';

const filterReducer = (state = filter, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default filterReducer;
