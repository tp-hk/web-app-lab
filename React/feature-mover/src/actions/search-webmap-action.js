import * as types from '../constants/action-types';

export const searchWebmap = webmapId => {
  return {
    type: types.SET_WEBMAPID,
    payload: {
      webmapId,
    },
  };
};
