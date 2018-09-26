import * as csv from 'csvtojson';
import * as types from '../constants/action-types';

export const uploadNewAttributes = csvContent => {

  // convert csv into JSON
  csv({
    noheader: false
  })
    .fromString(csvContent)
    .then(_features => {
      const features = {};
      for (let index in _features)
        features[index] = _features[index];

      return {
        type: types.UPLOAD_NEW_ATTRIBUTES,
        payload: {
          features,
        },
      };
    });
};
