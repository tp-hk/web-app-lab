import React, { Component } from 'react';
import logo from '../style/logo.svg';
import '../style/header.css';
import FeatureCreatorContainer from './feature-creator-container';

class App extends Component {
  render() {
    return (
      <div>
        <header className='app-header'>
          <img src={logo} alt='logo' />
          <span className='app-title'>feature - mover</span>
        </header>

        <FeatureCreatorContainer />
      </div>
    );
  }
}

export default App;
