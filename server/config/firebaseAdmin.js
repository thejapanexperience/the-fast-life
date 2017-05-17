const admin = require('firebase-admin');
const path = require('path');

const configPath = path.join(__dirname, '../../firebase-config.json');

console.log('process.env: ', process.env);

admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE),
  databaseURL: 'https://thefastlife-571fa.firebaseio.com',
});

module.exports = admin;
