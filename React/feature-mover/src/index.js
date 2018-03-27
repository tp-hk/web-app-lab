import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.css';
import './style/index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers/reducers';

// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render (<App />, document.getElementById ('root'));

ReactDOM.render (
  <Provider store={createStore (reducers)}>
    <App />
  </Provider>,
  document.getElementById ('root')
);
// registerServiceWorker ();
