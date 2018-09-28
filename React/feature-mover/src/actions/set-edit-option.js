export const SET_EDIT_OPTION = 'SET_EDIT_OPTION';
export const setEditOption = option => {
  return {
    type: SET_EDIT_OPTION,
    payload: {
      option
    },
  };
};