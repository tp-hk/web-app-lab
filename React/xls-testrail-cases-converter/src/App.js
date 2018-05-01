import React, { Component } from 'react';
import logo from './logo.svg';
import './style/App.css';

import ContentContainer from './components/content-container';

class App extends Component {
  render() {
    return (
      <div>
        <header className="App-header App">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Ops Dashboard QA Utilities</h1>
        </header>
        <ContentContainer/>
      </div>
    );
  }
}

export default App;
