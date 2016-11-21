const initialState = {
  comment1: '',
  comment2: [],
  updateDate1: '',
  updateDate2: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'COMMENT1':
      const { comment1 } = action.payload;
      return Object.assign({}, state, {
        comment1,
      });
    case 'COMMENT2':
      const { comment2 } = action.payload;
      return Object.assign({}, state, {
        comment2,
      });
    case 'UPDATE_DATE1':
      const { updateDate1 } = action.payload;
      return Object.assign({}, state, {
        updateDate1,
      });
    default:
      return state;
  }
}
