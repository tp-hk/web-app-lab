import * as types from '../constants/action-types';

export const setEditOption = option => {
  return {
    type: types.SET_EDIT_OPTION,
    payload: {
      option
    },
  };
};