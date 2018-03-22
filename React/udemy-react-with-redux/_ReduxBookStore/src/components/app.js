import React from 'react';
import ComponentBase from './ComponentBase';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends ComponentBase {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
