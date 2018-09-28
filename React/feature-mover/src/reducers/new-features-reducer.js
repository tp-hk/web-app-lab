import initialState from './initial-state';
import { LOAD_FEATURES } from '../actions/load-features-action';

export const newFeatures = (
  state = initialState.entities.newFeatures,
  action
) => {
  switch (action.type) {
    case LOAD_FEATURES:
      return action.payload.features;
  }

  return state;
};
