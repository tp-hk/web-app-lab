export const SET_WEBMAPID = 'SET_WEBMAPID';
export const searchWebmap = webmapId => {
  return {
    type: SET_WEBMAPID,
    payload: {
      webmapId,
    },
  };
};
