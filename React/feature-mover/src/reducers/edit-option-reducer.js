import initialState from './initial-state';
import * as types from '../constants/action-types';

export const editOption = (state = initialState.ui.editOption, action) => {
  switch (action.type) {
    case types.SET_EDIT_OPTION:
      return action.payload.option;
  }
  return state;
};