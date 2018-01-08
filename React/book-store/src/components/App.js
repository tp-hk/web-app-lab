import React from 'react';

import NavBar from './NavBar';

const App = (props) => {
  return (
    <div className='container'>
      <NavBar
        title='Broken BookStore'
        routes={{
          'book': 'Book',
          'home': 'Home',
          'about': 'About'
        }}
      />
      {props.children}
    </div>
  );
};

// passing the children to inject child components as determined by router

export default App;