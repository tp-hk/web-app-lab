import React from 'react'
import {combineReducers} from 'redux';
import books from './bookReducers';


const reducers = combineReducers({
  books: books
});

export default reducers;