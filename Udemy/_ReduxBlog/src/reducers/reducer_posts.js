import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      if (!action.payload)
        return state;
      return _.mapKeys(action.payload.data, 'id')
    case FETCH_POST:
      const post = action.payload.data;
      // ES5
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // fetching and adding object to state object, instead of getting the state again every time
      // ES6
      return { ...state, [action.payload.data.id]: action.payload.data }
    case DELETE_POST:
      // a bit of cleanup for the local store
      return _.omit(state, action.payload);
    default:
      return state;
  }
}