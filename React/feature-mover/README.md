This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Dev Notes

Create project:
- `npx create-react-app feature-mover` to create feature-mover app using boilerplate
- `cd feature-mover npm start` run project locally

Install modules:
- `npm i --save react-bootstrap bootstrap@3`
- `npm i --save redux`
- `npm i --save react-redux`

### Coding 

Set up Redux: 
- `src/reducers/initial-state` - Initial state: create a **plain object** with the shape of the entire state 
- `src/reducers/a-reducer` - A reducer: a **function** that takes `state = initialState.partialState, action)` and returns a new state
- `src/reducers/reducers` - Reducers: use the **combineReducers** function to combine all **reducers**

Set up actions:
- `src/actions/an-action-creator` - An action: A **function** that returns an action **object** 
- `src/actions/index` - Optional. Import all actions to do a single export
- `src/constants/action-types` - Optional. Store all action names to be used by each **reducer** and each **action creator**

Set up index.js:
- `import {createStore} from 'redux';`
- `import {Provider} from 'react-redux';`
- `import reducers from './reducers/reducers';`
- Change `ReactDOM.render(<App.../>>)` to `ReactDOM.render(<Provider store={createStore(reducers)}/>>)` 

Wire up in component: 
- Need to `import {connect} from 'react-redux'`
- Need to `import {anAction} from '../actions/index';` for each action
- Add `function mapStateToProps(state){// return object}` to get access to store
- Use `export default connect(mapStateToProps, {anAction, anotherAction})(ComponentName)` to get access to store and/or actions



