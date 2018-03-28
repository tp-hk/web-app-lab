import {combineReducers} from 'redux';
import webmapId from './webmapId-reducer';

const reducers = combineReducers ({
  webmapId: webmapId,
});

export default reducers;
