import {combineReducers} from 'redux';
import {webmapId} from './webmapId-reducer';
import {map, view} from './map-view-reducer';
import {newFeatures} from './new-features-reducer';

const reducers = combineReducers ({
  webmapId,
  map,
  view,
  newFeatures,
});

export default reducers;
