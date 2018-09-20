import { combineReducers } from 'redux';
import { webmapId } from './webmapId-reducer';
import { map, view } from './map-view-reducer';
import { newFeatures } from './new-features-reducer';
import { editOption } from './edit-option-reducer';

const reducers = combineReducers({
  webmapId,
  map,
  view,
  newFeatures,
  editOption
});

export default reducers;
