## React
- In React, view === components, components produce HTML
- React: create and manage components; ReactDOM: For rendering components on DOM
- React.createClass() vs ReactDom.render(): 
<img width="878" alt="screen shot 2017-12-27 at 9 17 17 pm"src="https://user-images.githubusercontent.com/10753915/34400935-5c72fd72-eb4b-11e7-8aca-ca8800d58495.png">
- Types of components
  - Functional: provides a function that user can call to return some JSX. Simple component. Doesn't communicate with other components
  - Class: has state object and additional functionality. Must have the `render()` component
  - Recommended: start with functional component, upgrade to class-based if needed
- When a component's state changes, the component and its child components will be re-rendered

## JSX
- JSX gets transpiled into plain JS. To experiment the change, use https://babeljs.io/repl

## JS.
- `const`: variable that never changes
- `import React, { Component } from 'react'` - { Component } means pulling off the React.Component property from React
- Class `constructor`: super(props) calls the parent class's ctor

## To get started
- npm install
- npm install --save youtube-api-search
- npm start
- access the app from http://localhost:8080/