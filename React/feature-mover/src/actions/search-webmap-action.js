import * as types from '../constants/ActionTypes';

export const searchWebmap = webmapId => {
  return {
    type: types.SET_WEBMAPID,
    payload: {
      webmapId,
    },
  };
};
