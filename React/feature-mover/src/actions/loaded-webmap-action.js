export const SET_MAP = 'SET_MAP';
export const setMap = map => {
  // the map object associated with the WebMap
  return {
    type: SET_MAP,
    payload: {
      map,
    },
  };
};

export const SET_VIEW = 'SET_VIEW';
export const setView = view => {
  // the view object where the WebMap is rendered
  return {
    type: SET_VIEW,
    payload: {
      view,
    },
  };
};
