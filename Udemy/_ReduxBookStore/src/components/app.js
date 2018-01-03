import React from 'react';
import ComponentBase from './ComponentBase'
import BookList from '../containers/book-list'

export default class App extends ComponentBase {
  render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
}
