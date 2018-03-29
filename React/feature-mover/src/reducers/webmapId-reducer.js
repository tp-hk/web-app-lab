import initialState from './initial-state';
import * as types from '../constants/action-types';

export const webmapId = (state = initialState.entities.webmapId, action) => {
  switch (action.type) {
    case types.SET_WEBMAPID:
      return action.payload.webmapId;
  }

  return state;
};
