import React from 'react';
import ComponentBase from './ComponentBase'
class SearchBar extends ComponentBase {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    }
  }

  render() {
    return <input onChange={(event) => { console.log(event.target.value); }} />
  }
}

export default SearchBar;