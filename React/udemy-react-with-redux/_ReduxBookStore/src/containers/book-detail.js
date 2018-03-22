import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { displayBookDetail } from '../actions/index';

class BookDetail extends ComponentBase {

  render() {
    // best practice: adding a default case when state === null on start up
    if (!this.props.book) {
      return (
        <div>
          Select a book
        </div>
      );
    }

    return (
      <div>
        {this.props.book.title} ({this.props.book.pages})
      </div>
    );
  }
}

function mapStateToProps(state) {
  // what to return? check reducers/index.js
  return {
    book: state.activeBook
  }
}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps)(BookDetail);