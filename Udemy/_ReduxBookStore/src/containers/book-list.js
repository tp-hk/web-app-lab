import React from 'react';
import ComponentBase from '../components/ComponentBase';
// ** added
// connecting redux with react
import { connect } from 'react-redux';  

class BookList extends ComponentBase {

  renderList() {
    return this.props.books.map((book) => {
      return <li className='list-group-item' key={book.title}>{book.title}</li>
    });
  }

  render() {
    return (
      <div>
        <h3>Books from {this.props.storeName}</h3>
        <ul className='list-group col-sm-4'>
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // ** added
  // mapping states of the app including books: [] or activeBook: {} into props
  // whatever is returned will show up as this.props inside of BookList
  return {
    storeName: 'ReadOn',
    books: state.books
  }
}

// export default BookList; //** removed

// ** added
// no longer exporting the plain component, instead component is converted to container and gets returned
// connect()() takes a function and a component and produces a container
// container is a component that's aware of the state produced by Redux
export default connect(mapStateToProps)(BookList);