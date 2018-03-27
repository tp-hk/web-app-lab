import initialState from './initial-state';
import * as types from '../constants/ActionTypes';

const locations = (state = initialState.entities.locations, action) => {
  switch (action.type) {
    case types.SET_WEBMAPID:
      console.log (`received ${action.payload.webmapId}`);
      return action.payload.webmapId;
  }

  return state;
};

export default locations;
