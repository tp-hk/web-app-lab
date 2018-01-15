import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload.data);
      if (!action.payload)
        return state;

      return _.mapKeys(action.payload, 'id')
    default:
      return state;
  }
}