import React from 'react';
import { Route, IndexRoute } from 'react-router-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

export default (
  <Route path='/' component={App}>
    <Route component={HomePage}/>
    <Route path='library' component={AboutPage}/>
  </Route>
);