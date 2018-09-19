import initialState from './initial-state';
import * as types from '../constants/action-types';

export const newFeatures = (
  state = initialState.entities.newFeatures,
  action
) => {
  switch (action.type) {
    case types.UPLOAD_NEW_ATTRIBUTES:
      return action.payload.features;
  }

  return state;
};
