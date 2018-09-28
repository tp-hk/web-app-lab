import initialState from './initial-state';
import { SET_WEBMAPID } from '../actions/search-webmap-action';

export const webmapId = (state = initialState.entities.webmapId, action) => {
  switch (action.type) {
    case SET_WEBMAPID:
      return action.payload.webmapId;
  }

  return state;
};
