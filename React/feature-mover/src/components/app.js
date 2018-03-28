import React, {Component} from 'react';
import logo from '../style/logo.svg';
import '../style/header.css';
import MapSearchBar from './map-search-bar';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="app-header">
          <img src={logo} alt="logo" />
          <span className="app-title">feature - mover</span>
        </header>

        <MapSearchBar />
      </div>
    );
  }
}

export default App;
