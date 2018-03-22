// contains all action creators. They will be wired up with reducers NOT the containers directly

export function selectBook(book) {
  // an action creator
  console.log(' a book has been selected ' + book.title);

  // an action creator must return an action i.e. an object with type (purpose of the action) and optionally payload (describes the action)
  // type can be pulled into a separate file to keep data integrity. It can be a string and usually in all cap
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

