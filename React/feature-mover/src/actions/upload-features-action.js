export const START_FEATURE_UPLOAD = 'START_FEATURE_UPLOAD';
export const startFeatureUpload = features => {
  return {
    type: START_FEATURE_UPLOAD,
    payload: {
      features,
    },
  };
};

export const PAUSE_FEATURE_UPLOAD = 'PAUSE_FEATURE_UPLOAD';
export const pauseFeatureUpload = features => {
  return {
    type: PAUSE_FEATURE_UPLOAD,
    payload: {
      features,
    },
  };
};

export const STOP_FEATURE_UPLOAD = 'STOP_FEATURE_UPLOAD';
export const stopFeatureUpload = features => {
  return {
    type: STOP_FEATURE_UPLOAD,
    payload: {
      features,
    },
  };
};
