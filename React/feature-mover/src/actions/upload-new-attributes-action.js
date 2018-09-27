import * as types from '../constants/action-types';

export const uploadNewAttributes = features => {
  return {
    type: types.UPLOAD_NEW_ATTRIBUTES,
    payload: {
      features,
    },
  };
};
