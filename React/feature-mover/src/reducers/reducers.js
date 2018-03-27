import {combineReducers} from 'redux';
import locations from './locations-reducers';

const reducers = combineReducers ({
  locations: locations,
});

export default reducers;
