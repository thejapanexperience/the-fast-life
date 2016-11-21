const initialState = {
  authenticated: false,
  user: 'no user yet',
};
export default function (state = initialState, action) {
  switch (action.type) {
    case 'SIGN_IN_SUCCESS':
      const { user } = action.payload;
      return Object.assign({}, state, {
        authenticated: true,
        user,
      });
    case 'UPDATE_USER_NEW_FAST':
      const { updatedUser } = action.payload;
      return Object.assign({}, state, {
        authenticated: true,
        user: updatedUser,
      });
    case 'INIT_AUTH_SUCCESS':
      const checkedUser = action.payload;
      return Object.assign({}, state, {
        authenticated: true,
        user: checkedUser.data,
      });
    // case 'INIT_AUTH_SUCCESS':
    //   const { uid, email, displayName, photoURL } = action.payload;
    //   console.log('in reducer INIT_AUTH_SUCCESS');
    //   return Object.assign({}, state, {
    //     authenticated: true,
    //     user: { uid, email, displayName, photoURL },
    //   });
    case 'SIGN_OUT_SUCCESS':
      return initialState;
    default:
      return state;
  }
}
