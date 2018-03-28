import initialState from './initial-state';
import * as types from '../constants/action-types';

export const map = (state = initialState.entities.map, action) => {
  switch (action.type) {
    case types.SET_MAP:
      return action.payload.map;
  }
  return state;
};

export const view = (state = initialState.entities.view, action) => {
  switch (action.type) {
    case types.SET_VIEW:
      return action.payload.view;
  }
  return state;
};
