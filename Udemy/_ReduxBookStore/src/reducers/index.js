import { combineReducers } from 'redux';
import BookReducer from './reducer_books'

const rootReducer = combineReducers({
  // Telling Redux how to create the app state
  // mapping states (e.g. BookReducer) with its name (e.g. books)
  books: BookReducer
});

export default rootReducer;
