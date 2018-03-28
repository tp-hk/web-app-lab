import {combineReducers} from 'redux';
import {webmapId} from './webmapId-reducer';
import {map, view} from './map-view-reducer';

const reducers = combineReducers ({
  webmapId,
  map,
  view,
});

export default reducers;
