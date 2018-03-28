import initialState from './initial-state';
import * as types from '../constants/action-types';

const webmapId = (state = initialState.entities.webmapId, action) => {
  switch (action.type) {
    case types.SET_WEBMAPID:
      console.log (`received ${action.payload.webmapId}`);
      return action.payload.webmapId;
  }

  return state;
};

export default webmapId;
