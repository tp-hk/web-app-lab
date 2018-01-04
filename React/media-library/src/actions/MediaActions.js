import * as types from '../constants/actionTypes';

export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

export const selectedVideoAction = (video) => ({
  type: type.SELECTED_VIDEO,
  video
});

export const searchMediaAction = (payload) => ({
  type: types.SEARCH_MEDIA_REQUEST,
  payload
});