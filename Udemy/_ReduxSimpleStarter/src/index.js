import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

// Sign up and get Youtube key from console.developers.google.com
const API_KEY = 'AIzaSyDU_FM_MUW1Hy_4G5E2tWcfOHzjshSfPjQ';

// 1. create a new component to produce some HTML
const App = () => {
    return <div>
        <SearchBar/>
    </div>;
}

// 2. put this component into the DOM
ReactDom.render(
    <App />,
    document.getElementById('container')
);   // container comes from index.js

//// 
// From the above,App is a class which produces App instances, but ReactDom.render(App) requires instances not the class, therefore to fix this, pass in an instance of App i.e. <App/>

//// ReactDom.render(<App />); by itself doesn't know where to render. Therefore, add a second arg to include the Target container