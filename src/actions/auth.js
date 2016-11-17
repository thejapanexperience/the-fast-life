import firebase from 'firebase';
import { firebaseAuth } from '../firebase';

function signInSuccess(result) {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: result.user,
  };
}

function initAuthSuccess(user) {
  return {
    type: 'INIT_AUTH_SUCCESS',
    payload: user,
  };
}

function initAuthError(err) {
  return {
    type: 'INIT_AUTH_ERROR',
    payload: err,
  };
}

function signOutSuccess() {
  return {
    type: 'SIGN_OUT_SUCCESS',
  };
}

function signInError(err) {
  return {
    type: 'SIGN_IN_ERROR',
    payload: err,
  };
}

function signOutError(err) {
  return {
    type: 'SIGN_OUT_ERROR',
    payload: err,
  };
}

function authenticate(provider) {
  return (dispatch) => {
    firebaseAuth.signInWithPopup(provider)
    .then(result => dispatch(signInSuccess(result)))
    .catch(err => dispatch(signInError(err)));
  };
}

export function signInWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  return authenticate(provider);
}

export function signOut() {
  return (dispatch) => {
    firebaseAuth.signOut()
    .then(() => dispatch(signOutSuccess()))
    .catch(err => dispatch(signOutError(err)));
  };
}

export function initAuth(dispatch) {
  return new Promise((res, rej) => {
    const unsub = firebaseAuth.onAuthStateChanged(
      (user) => {
        if (user) {
          dispatch(initAuthSuccess(user));
        }
        unsub();
        res();
      },
      (error) => {
        // dispatch(initAuthError(error));
        // rej(err);
        res();
      });
  });
}
