import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { selectBook } from '../actions/index';  // ** added for wiring with actionCreator and reducers 
import { bindActionCreators } from 'redux'; // ** added for wiring with actionCreator and reducers 

// ** added for changing into a container
// connecting redux with react
import { connect } from 'react-redux';

class BookList extends ComponentBase {

  renderList() {
    return this.props.books.map((book) => {
      return <li className='list-group-item' key={book.title} onClick={() => { this.props.selectBook(book); }}>{book.title}</li>
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
  // for mapping states to this.props

  // ** added for changing into a container
  // mapping states of the app including books: [] or activeBook: {} into props
  // whatever is returned will show up as this.props inside of BookList
  return {
    storeName: 'ReadOn',
    books: state.books
  }
}

function mapDispatchToProps(dispatch) {
  // for mapping actions to this.props

  // added for wiring with actionCreator and reducers 
  // whenever selectBook is called, result should be dispatched to all reducers thru the "dispatch" function

  // Anything returned from this function will end up as props on this BookList container
  // for the { selectBook: selectBook } object, the key is called by this.props i.e. this.props.selectBook, this will call the 
  // value (selectBook) function
  // bindActionCreators() take what's returned from (selectBook) function with the reducers 
  return bindActionCreators({ selectBook: selectBook }, dispatch);

}

// export default BookList; //** removed for changing into a container

// ** added for changing into a container
// no longer exporting the plain component, instead component is converted to container and gets returned
// connect()() takes a function and a component and produces a container
// container is a component that's aware of the state produced by Redux
// export default connect(mapStateToProps)(BookList);

// added for wiring with actionCreator and reducers 
// It needs to know about this dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);