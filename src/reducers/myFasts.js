const initialState = {
  usersFasts: [],
  currentFast: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case 'GET_ALL_USERS_FASTS':
      const data = action.payload.fasts.data;
      return Object.assign({}, state, {
        usersFasts: data,
      });
    case 'SET_CURRENT_FAST':
      const { fast } = action.payload;
      return Object.assign({}, state, {
        currentFast: fast,
      });
    default:
      return state;
  }
}
