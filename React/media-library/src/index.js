import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// Initialize store
const store = configureStore();

// Provider component makes the store available to the components hierarchy. So pass the store as props to it. That way, the components below the hierarchy can access the store's state with the connect method
 
// Require the routes and render to the DOM using ReactDOM API
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('root')
);