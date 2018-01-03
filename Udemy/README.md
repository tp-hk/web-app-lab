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
- Component-level state: state that only affects one instance. In redux, there can be application-level state

## Redux
- Redux contains and manages the app. state (e.g. number counter, list of books, currently selected book); React represents the view; React-redux is used to connect Redux and React
- Redux uses one object (app. state) to hold all states

### Reducer (state management)
- A function which returns a piece of the app's state (object) using the key of the object. Number of reducers == number of state objects
- Two steps to create: First create reducer, then wire it up with the app (in reducer/index.js). 
- All reducers get 2 arguments: `state`, `action`. `state` is only the state this reducer is responsible for, not the app state; When an action is dispatched, the previous state of this reducer will be updated based on the logic
- Notes when creating reducers:
  - In method signature, use `state = null`, reason: when the app is booted up, state is undefined and will cause an error since reducer must return an object. Therefore, set state = null as the default
  - use switch to select which action to handle, and always have a base case to return the current state when the reducer doesn't need to care about the action
  - do not mutate the state object i.e. don't do: `state.title = 'newTitle'; return state`, instead always return a fresh object
  - other things not to do: https://redux.js.org/docs/basics/Reducers.html#handling-actions
- At startup, redux sends some boot-up actions to reducers, all reducers will return a state (the base case), which is default to null. Therefore, on the `render()` method of container it's best to add a default case when state === null on start up, see BookStore.book-detail.js as an example

### Container (connect states with views)
- One of the components will be "prompted" to a container/smart component: a component with connection to the Redux state (bridge between view and states)
- which component to get promoted to a container? Usually the most-parent which cares about a piece of state (e.g. BookList)
- In reality, app.js can be the only container in the app and have access to all states
- container can be put into a "containers" folder
- Whenever App state changes, containers will re-render right away
- Whenever App state changes, the mapStateToProps() will produce a new this.props
- changing from a component to a container: 
    - Before: <br/> <img width="651" alt="screen shot 2018-01-02 at 8 57 06 pm" src="https://user-images.githubusercontent.com/10753915/34509730-2a9e9782-f002-11e7-9d45-272de003fa43.png">
    - After: <br/> <img width="836" alt="screen shot 2018-01-03 at 9 29 31 am" src="https://user-images.githubusercontent.com/10753915/34531847-a41e6ae0-f068-11e7-95c5-3e0319a5d987.png">

### Actions
- actions and action creators are for changing states
- actionCreator: creates an action (with a type and some data (as an object)) 
- user triggers an action → actionCreator creates an action → action goes to all reducers → reducers decide if the action will be handled or not → if reducer doesn't ignore the action, it will return a new state → when all reducers processed all actions, the new state will be pumped back to all containers → all containers will re-render

## JS/WS6
- `const`: variable that never changes
- `import React, { Component } from 'react'` - { Component } means pulling off the React.Component property from React
- Class `constructor`: super(props) calls the parent class's ctor
- for `this.setState({ videos: videos});`. Since key === value, can condense it to `this.setState({ videos });`
- ES6 string concat: "`https://www.youtube.com/embed/${videoId}`"
- Can use lodash to delay the time a function is fired. e.g. 
  - before <br/> <img width="477" alt="screen shot 2017-12-29 at 1 18 00 am" src="https://user-images.githubusercontent.com/10753915/34433781-67807e88-ec36-11e7-9d5e-96b4666ee1e3.png">
  - after <br/> <img width="662" alt="screen shot 2017-12-29 at 1 18 22 am" src="https://user-images.githubusercontent.com/10753915/34433776-58f24e28-ec36-11e7-9770-c1735136c8f9.png">
- `module.exports = App` is the commonJS way of exporting; `export default App` is the ES6 way of exporting
- `function foo(arg1 = 123){ ... }` ==> if arg1 is undefined, set the default value to 123

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
- npm install --save lodash
- npm start
- access the app from http://localhost:8080/