import * as types from '../constants/actionConstants';

export const createBook = (book) => {
  console.log('in createBook ' + book);
  return {
    type: types.CREATE_BOOK,
    book
  }
}