import firebase from 'firebase';
  // Initialize Firebase
const config = {
  apiKey: 'AIzaSyBzgUlTSlrW5cuVCcTkePslMV-OQDdQ0ME',
  authDomain: 'test123456-56d2a.firebaseapp.com',
  databaseURL: 'https://test123456-56d2a.firebaseio.com',
  storageBucket: 'test123456-56d2a.appspot.com',
  messagingSenderId: '434809248855',
};
export const firebaseApp = firebase.initializeApp(config);
export const firebaseDB = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
