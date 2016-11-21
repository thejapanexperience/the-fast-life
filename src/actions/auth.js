import axios from 'axios';
import firebase from 'firebase';
import { firebaseAuth } from '../firebase';

function signInSuccess(user) {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: { user },
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
    .then(result =>
       axios.post('/api/users/usercheck', { result }),
    )
    .then((check) => {
      const user = check.data.result.user;
      if (!check.data.user) {
        return axios.post('api/users', { user });
      }
      const existingUser = check.data.user;
      return existingUser;
    })
    .then((user) => {
      dispatch(signInSuccess(user));
    })
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
          const email = user.email;
          axios.post('/api/users/getuserfromdb', { email })
          .then((user) => {
            dispatch(initAuthSuccess(user));
          });
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
