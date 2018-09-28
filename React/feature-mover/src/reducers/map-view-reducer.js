import initialState from './initial-state';
import { SET_MAP, SET_VIEW } from '../actions/loaded-webmap-action';

export const map = (state = initialState.entities.map, action) => {
  switch (action.type) {
    case SET_MAP:
      return action.payload.map;
  }
  return state;
};

export const view = (state = initialState.entities.view, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.payload.view;
  }
  return state;
};
