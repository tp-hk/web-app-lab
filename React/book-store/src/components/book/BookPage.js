import React, { Component } from 'react';
import * as bookActions from '../../actions/bookAction';
import { connect } from 'react-redux';

class BookPage extends Component {
  constructor(props) {
    super(props);

    this.handleBookNameChange = this.handleBookNameChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);

    this.state = {
      bookName: ''
    }
  }

  handleBookNameChange(evt) {
    evt.preventDefault();

    this.setState({
      bookName: evt.target.value
    });

    // this.props.createBook(evt.target.value);
    // this.props.dispatch(bookActions.createBook(evt.target.value));
    // this.props.dispatch(bookActions.createBook(this.state.newTitle));
  }

  handleFormSubmit(evt) {
    evt.preventDefault();

    this.props.createBook(this.state.bookName);
  }

  render() {
    let addedBooks = null;
    if (this.props.books && this.props.books.length > 0) {
      addedBooks = this.props.books.map(book => {
        return <li key={book}>{book}</li>
      });
    }

    return (
      <div>
        <h1>Books</h1>
        <ul>
          {addedBooks}
        </ul>
        <div>
          <h3>Add Book</h3>
          <form onSubmit={this.handleFormSubmit}>
            <input onChange={this.handleBookNameChange} />
            <input type='submit' />
          </form>
        </div>
      </div>
    );
  }
}

// export default BookPage;

function mapStateToProps(state, ownProps) {
  console.log('received state update ' + state.books);
  return {
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createBook: book => dispatch(bookActions.createBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);