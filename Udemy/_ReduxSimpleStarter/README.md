## React
- In React, view === components, components produce HTML
- React: create and manage components; ReactDOM: For rendering components on DOM
- React.createClass() vs ReactDom.render(): <br/> <img width="878" alt="screen shot 2017-12-27 at 9 17 17 pm"src="https://user-images.githubusercontent.com/10753915/34400935-5c72fd72-eb4b-11e7-8aca-ca8800d58495.png">
- Types of components
  - Functional: take some information and return some JSX. Simple component, but can contain class or functional component. Doesn't communicate with other components e.g. Video_List (which doesn't have state)
  - Class: has state object and additional functionality. Must have the `render()` component
  - Recommended: start with functional component, upgrade to class-based if needed
  - Refactoring App component from functional to class component: 
    - Before: <br/> <img width="546" alt="screen shot 2017-12-28 at 3 22 05 pm" src="https://user-images.githubusercontent.com/10753915/34425703-57784a28-ebe3-11e7-80b9-8df389d1157f.png">
    - After: <br/> <img width="611" alt="screen shot 2017-12-28 at 3 24 47 pm" src="https://user-images.githubusercontent.com/10753915/34425714-7141b2d2-ebe3-11e7-893c-5b25980e6128.png">
- When a component's state changes, the component and its child components will be re-rendered
- Controlled component: this.state sets the input's value. Purpose/value of controlled component: 
  - for setting default placeholder text; 
  - easier to read the value out of the input (just use this.state.value)
  - cleaner way to get value from user (through state)
  - example: <br/> <img width="920" alt="screen shot 2017-12-28 at 2 58 49 pm" src="https://user-images.githubusercontent.com/10753915/34425351-c59890a2-ebdf-11e7-9313-e2426545174e.png">
- Downwards dataflow: only the most parent component (i.e. App, or index.js) should be responsible for fetching data 
- When react needs to render objects of the same type (e.g. list item), it assumes that the objects come in as a list. Having a key helps React determine which object to re-render when item is updated
- passing callback from parent to child through `this.props.parentFunction` is ok, but it's uncommon to go more than two levels

## JS
- `const`: variable that never changes
- `import React, { Component } from 'react'` - { Component } means pulling off the React.Component property from React
- Class `constructor`: super(props) calls the parent class's ctor
- for `this.setState({ videos: videos});`. Since key === value, can condense it to `this.setState({ videos });`
- ES6 string concat: "`https://www.youtube.com/embed/${videoId}`"

## JSX
- JSX gets transpiled into plain JS. To experiment the change, use https://babeljs.io/repl
- The following are the same
  - `<SearchBar onSearchTermSubmit={this.videoSearch} />`
  - `<SearchBar onSearchTermSubmit={(returnValue) => { this.videoSearch(returnValue); }} />`

## CSS
- best practice: give the root-level element of a component the className using the name of the component e.g. search-bar.js can use `<div className='search-bar'>`

## To get started
- npm install
- npm install --save youtube-api-search
- npm start
- access the app from http://localhost:8080/