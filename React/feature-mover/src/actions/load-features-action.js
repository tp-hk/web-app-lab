export const LOAD_FEATURES = 'LOAD_FEATURES';
export const loadFeatures = features => {
  return {
    type: LOAD_FEATURES,
    payload: {
      features,
    },
  };
};