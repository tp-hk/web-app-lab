import * as types from '../constants/action-types';

export const uploadNewAttributes = csvContent => {
  console.log (`in uploadNewAttributes(), csv content ${csvContent}`);

  // TODO: parse csvContent into an object
  const features = {
    1: {
      Long: -94.814972,
      Lat: 39.813138,
      Name: 'Starbucks: Target St. Joseph T-1977 - St. Joseph MO',
      Address: '5201 N. Belt Hwy.',
      City: 'St Joseph',
      State: 'MO',
      Zip: 64506,
      Phone: '(816) 279-4632',
    },
    2: {
      Long: -95,
      Lat: 40,
      Name: '123 Starbucks: Target St. Joseph T-1977 - St. Joseph MO',
      Address: '6201 N. Belt Hwy.',
      City: 'St Joseph',
      State: 'MO',
      Zip: 64506,
      Phone: '(816) 279-4632',
    },
  };
  return {
    type: types.UPLOAD_NEW_ATTRIBUTES,
    payload: {
      features,
    },
  };
};
