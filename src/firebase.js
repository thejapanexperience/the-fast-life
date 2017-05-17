import firebase from 'firebase';
  // Initialize Firebase
// const config = {
//   apiKey: 'AIzaSyBzgUlTSlrW5cuVCcTkePslMV-OQDdQ0ME',
//   authDomain: 'test123456-56d2a.firebaseapp.com',
//   databaseURL: 'https://test123456-56d2a.firebaseio.com',
//   storageBucket: 'test123456-56d2a.appspot.com',
//   messagingSenderId: '434809248855',
// };
const config = {
  apiKey: 'AIzaSyBwgjwriFcZTqJsy-jf1QU1PxaLyT2vCV4',
  authDomain: 'thefastlife-571fa.firebaseapp.com',
  databaseURL: 'https://thefastlife-571fa.firebaseio.com',
  projectId: 'thefastlife-571fa',
  storageBucket: 'thefastlife-571fa.appspot.com',
  messagingSenderId: '832412235220',
};
export const firebaseApp = firebase.initializeApp(config);
export const firebaseDB = firebaseApp.database();
export const firebaseAuth = firebaseApp.auth();
