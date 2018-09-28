import initialState from './initial-state';
import { SET_EDIT_OPTION } from '../actions/set-edit-option';

export const editOption = (state = initialState.ui.editOption, action) => {
  switch (action.type) {
    case SET_EDIT_OPTION:
      return action.payload.option;
  }
  return state;
};