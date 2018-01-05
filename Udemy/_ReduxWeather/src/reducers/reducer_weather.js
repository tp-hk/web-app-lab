import * as ACTIONS from '../constants/actions_constants';

export default function (state = [], action) {
  console.log('action received ' + action.type);
  switch (action.type) {
    case ACTIONS.FETCH_WEATHER:
      // return state.push(action.payload.data)  // DON'T DO THIS
      // return state.concat([action.payload.data]); // DO THIS
      return [action.payload.data, ...state]; // OR THIS, ...state will be added at the front

  }

  return state;
}