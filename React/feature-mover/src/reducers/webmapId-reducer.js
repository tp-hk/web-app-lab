import initialState from './initial-state';
import * as types from '../constants/action-types';

export const webmapId = (state = initialState.entities.webmapId, action) => {
  switch (action.type) {
    case types.SET_WEBMAPID:
      console.log (`received ${action.payload.webmapId}`);
      return action.payload.webmapId;
  }

  return state;
};
