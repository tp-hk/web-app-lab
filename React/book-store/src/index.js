import React from 'react';
import ReactDOM from 'react-dom';

// Store
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';

// Routes-related
import { BrowserRouter, Route } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import BookPage from './components/book/BookPage';

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <BrowserRouter>
      <div>
        <Route path='/' component={App} />
        <Route path='/about' component={AboutPage} />
        <Route path='/home' component={HomePage} />
        <Route path='/book' component={BookPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);