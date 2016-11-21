
export function getFasts(fasts) {
  return {
    type: 'GET_ALL_USERS_FASTS',
    payload: { fasts },
  };
}

export function setCurrentFast(fast) {
  return {
    type: 'SET_CURRENT_FAST',
    payload: { fast },
  };
}
