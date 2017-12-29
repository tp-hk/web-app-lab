import React, { Component } from 'react';
import ComponentBase from './ComponentBase';

class SearchBar extends ComponentBase {

  constructor(props) {
    super(props);
    this._bind('onSubmitSearchTerm');

    this.state = {
      term: ''
    };
  }

  onSubmitSearchTerm(event) {
    event.preventDefault();
    this.props.onSearchTermSubmit(this.state.term);
  }

  render() {
    // Controlled component:

    // logic flow: 
    // index.js renders SearchBar, which calls SearchBar.constructor, which sets states,
    // which calls render(), which set input value. Then when onChange happens, this.setState will update state, which causes the UI to re-render, which causes the value to get the latest this.state.term for display.
    return <div>
      <form className='search-bar' onSubmit={this.onSubmitSearchTerm}>
        <input
          value={this.state.term}
          onChange={(event) => { this.setState({ term: event.target.value }); }}
        />
        <input type='submit' value='Submit' />
      </form>
    </div>
  }
}

export default SearchBar;