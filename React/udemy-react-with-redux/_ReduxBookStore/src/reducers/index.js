import { combineReducers } from 'redux';
import BookReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

const rootReducer = combineReducers({
  // Telling Redux how to create the app state with the key:value pair
  // mapping states (e.g. BookReducer) with its name (e.g. books)
  books: BookReducer,
  activeBook: ActiveBookReducer
});

export default rootReducer;
