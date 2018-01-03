import React from 'react';
import ComponentBase from '../components/ComponentBase';
import { connect } from 'react-redux';

class SearchBar extends ComponentBase {
  constructor(props) {
    super(props);

    this._bind('handleSearchTermChange');

    this.state = {
      term: ''
    }
  }

  handleSearchTermChange(evt) {
    evt.preventDefault();

    this.setState({
      term: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form className='input-group' onSubmit={this.handleSubmit}>
        <input
          placeholder='Get a forecast in cities'
          className='form-control'
          value={this.state.term}
          onChange={this.handleSearchTermChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

export default SearchBar;