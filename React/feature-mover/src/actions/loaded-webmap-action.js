import * as types from '../constants/action-types';

export const setMap = map => {
  // the map object associated with the WebMap
  return {
    type: types.SET_MAP,
    payload: {
      map,
    },
  };
};

export const setView = view => {
  // the view object where the WebMap is rendered
  return {
    type: types.SET_VIEW,
    payload: {
      view,
    },
  };
};
