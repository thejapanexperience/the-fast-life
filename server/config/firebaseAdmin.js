const admin = require('firebase-admin');
const path = require('path');

const configPath = path.join(__dirname, '../../firebase-config.json');

admin.initializeApp({
  credential: admin.credential.cert(process.env.FIREBASE || configPath),
  databaseURL: 'https://thefastlife-571fa.firebaseio.com',
});

module.exports = admin;
