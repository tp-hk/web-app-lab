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
- The `ref` property in react allows a component to connect to an HTML element. E.g. when calling `this.refs.map`, the component with the `ref='map'` property can be accessed

## Redux
- Redux manages the app. state (e.g. number counter, list of books, currently selected book); React represents the view; React-redux is used to connect Redux and React
- Redux uses one object (app. state) to hold all states
- `redux-form` handles redux-related forms. It validates form elements and submit forms
- how `redux-form` works:  <br/> <img width="358" alt="screen shot 2018-01-15 at 10 42 38 am" src="https://user-images.githubusercontent.com/10753915/34957103-019c80f4-f9e1-11e7-9bc2-ffeef5118252.png">
  1. Setup redux form in index reducer (see [example](https://github.com/StephenGrider/ReduxCasts/blob/master/blog/src/reducers/index.js)). `form` keyword must be used for `formReducer`;
  2. In form container component, identify pieces of form state (i.e. what input controls)
  3. Make one field component per piece of state in the component

## Redux-form


### Reducer (state management)
- A function which returns a piece of the app's state (object) using the key of the object. Number of reducers == number of app states
- Two steps to create: First create reducer, then wire it up with the app (in reducer/index.js). 
- All reducers get 2 arguments: `state`, `action`. `state` is only the state this reducer is responsible for, not the app state; When an action is dispatched, the previous state of this reducer will be updated based on the logic
- Notes when creating reducers:
  - MUST: return an object representing a state
  - MUST: in method signature, use `state = null`, reason: when the app is booted up, state is undefined and will cause an error since reducer must return an object. Therefore, set state = null as the default
  - MUST: use switch to select which action to handle, and must have a base case to return the current state when the reducer doesn't need to care about the action
  - do not mutate the state object i.e. don't do: `state.title = 'newTitle'; return state`, instead always return a fresh object
  - other things not to do: https://redux.js.org/docs/basics/Reducers.html#handling-actions
- At startup, redux sends some boot-up actions to reducers, all reducers will return a state (the base case), which is default to null. Therefore, on the `render()` method of container it's best to add a default case when state === null on start up, see BookStore.book-detail.js as an example

### Container (connect states with views)
- Steps to create new container component and wire with route:
  1. Scaffold new component
  2. Add route config to index.js
  3. Add navigation between new component and other components
  4. Create UI + internal logic for the new component
  5. If needed, wire with action creator and application state. To do that: 
    - First add the action creator
    - Then create the reducer that works with the action
    - Then wire up component with actions and the state 
- One of the components will be "prompted" to a container/smart component: a component with connection to the Redux state (bridge between view and states)
- which component to get promoted to a container? 
  - Usually the most-parent which cares about a piece of state (e.g. BookList)
  - Or one that performs an action that changes the state of the app (e.g. search for stuff) i.e. need to talk to Redux
- In reality, app.js can be the only container in the app and have access to all states
- container can be put into a "containers" folder
- Whenever App state changes, containers will re-render right away
- Whenever App state changes, the mapStateToProps() will produce a new this.props
- changing from a component to a container: 
    - Before: <br/> <img width="651" alt="screen shot 2018-01-02 at 8 57 06 pm" src="https://user-images.githubusercontent.com/10753915/34509730-2a9e9782-f002-11e7-9d45-272de003fa43.png">
    - After: <br/> <img width="836" alt="screen shot 2018-01-03 at 9 29 31 am" src="https://user-images.githubusercontent.com/10753915/34531847-a41e6ae0-f068-11e7-95c5-3e0319a5d987.png">
- `connect(mapStateToProps, mapDispatchToProps)(MyClass)`: `connect` adds some additional props to component

### Actions
- MUST: actionCreator Must return an action object (which must have a type and optionally some data) 
- whenever saving data or making API requests, always call action creator
- Logic flow: user triggers an action → actionCreator creates an action → action goes to all reducers → reducers decide if the action will be handled or not → if reducer doesn't ignore the action, it will return a new state → when all reducers processed all actions, the new state will be pumped back to all containers → all containers will re-render
- The `mapDispatchToPros()` method can be simplified as follow: 
  - Before (used when additional computation is needed in the method): <img width="533" alt="screen shot 2018-01-15 at 9 38 46 am" src="https://user-images.githubusercontent.com/10753915/34955416-1fba3a98-f9d9-11e7-96c5-8afb30738902.png"> 
  - After: <img width="579" alt="screen shot 2018-01-15 at 9 39 28 am" src="https://user-images.githubusercontent.com/10753915/34955427-2665ee6e-f9d9-11e7-9917-7c7023b10e01.png">
  - After (used when additional computation is needed in the method): 

### Middleware
- gatekeeper. Receives an action from ActionCreator. It can then decide to let it pass to reducers, manipulate it, log it, or stop it
- For ReduxPromise, if an action returns a promise as the payload, the middleware stops the action, get the response from the promise, then creates a new action of the same type, and dispatch to the reducers. 

### Doing AJAX in Redux
- can use redux-promise package

### Router
- `react-router-dom` comes with History component
- minimum amount of code to test react router: 
  - before: <img width="581" alt="screen shot 2018-01-07 at 4 49 27 pm" src="https://user-images.githubusercontent.com/10753915/34656181-df7f680e-f3ca-11e7-9751-9789dd51dfab.png">
  - after: <img width="607" alt="screen shot 2018-01-07 at 4 49 04 pm" src="https://user-images.githubusercontent.com/10753915/34656184-e583e39c-f3ca-11e7-9969-67b3abdfddfa.png">
- with router, App component can be cleaned up as there's no more central location. Also dummy components can be setup to test routing code: 
  - Before: <img width="581" alt="screen shot 2018-01-07 at 4 49 27 pm" src="https://user-images.githubusercontent.com/10753915/34955464-5bee7cf4-f9d9-11e7-94ca-932d76496846.png">
  - After: <img width="607" alt="screen shot 2018-01-07 at 4 49 04 pm" src="https://user-images.githubusercontent.com/10753915/34955487-772b0bcc-f9d9-11e7-95e6-77891ac9582b.png">
- When doing `<Route ... component={MyComp}></Route>`, react-router sends a bunch of helpers and objects for helping with navigation e.g. `this.props.history`
- The following will cause all non-`/` components to generate under `/` component <br> <img width="476" alt="screen shot 2018-01-15 at 10 16 00 am" src="https://user-images.githubusercontent.com/10753915/34956232-19ec2604-f9dd-11e7-98c1-9c32ef184261.png"> <br/> Reason: Whenever router sees `/` on the URL, it always renders the component that matches `/`. Since `/` and `/posts/new` both contain `/`, the `/` component will be rendered. To fix, do one of the following:
  1. Change `<Route path='/' component={foo}/>` to `<Route path='/' exact component={foo}/>` 
  2. import `Switch` from `react-router-dom`, then change code to the following. Make sure the most generic route is placed at the END: <img width="468" alt="screen shot 2018-01-15 at 10 22 05 am" src="https://user-images.githubusercontent.com/10753915/34956463-0964edf6-f9de-11e7-9bec-aaee189369d2.png">
- `<Link>` generates an <a/> tag which responds to user click, therefore it's not appropriate for programmatic navigation e.g. redirection after form submission

## JSX
- JSX gets transpiled into plain JS. To experiment the change, use https://babeljs.io/repl
- The following are the same
  - `<SearchBar onSearchTermSubmit={this.videoSearch} />`
  - `<SearchBar onSearchTermSubmit={(returnValue) => { this.videoSearch(returnValue); }} />`

## JS/ES6
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
- in component ctor: `this.func = this.func.bind(this);` means override `this.func` with a new `this.func` which is bound to `this`.
- lines 1 + 2 below can be simplified into line 3:
  - `const lat = city.coord`
  - `const lng = city.coord`
  - `const {lat, lng} = city.coord`
- [obj, ...arr2] ==> create a new array with obj and items from arr2
- import statement: `import {foo} from '../actions/index';` can be simplified as `import {foo} from '../action';`
- Pulling off props from objects:
  - one level: `const {meta} = field;` --> meta prop was pulled off from field
  - two props from one-level: `const {meta, meta2} = field;` --> meta and meta2 props were pulled off from field
  - nested: `const { meta: { touched, error } } = field;` -->  touched and error (nested) properties are pulled off from field.meta
- The following are the same:
  - ES5: `const newState = {...state}; newState[newKey] = newValue;`
  - ES6: `const newState = {...state, [newKey]: newValue};`
    

## CSS
- Best practice: give the root-level element of a component the className using the name of the component e.g. search-bar.js can use `<div className='search-bar'>`
- Link which looks like a button `<Link className='btn btn-primary' to='/posts/new'>Ok</Link>`

## To get started
- npm install
- npm install --save youtube-api-search
- npm install --save lodash
- npm start
- access the app from http://localhost:8080/