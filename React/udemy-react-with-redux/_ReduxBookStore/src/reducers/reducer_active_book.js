export default function (state = null, action) {

  // what's inside the payload, check the action 'BOOK_SELECTED'
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload
  }

  return state;
}