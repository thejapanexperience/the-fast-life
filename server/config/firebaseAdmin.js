const admin = require('firebase-admin');
const path = require('path');

const configPath = path.join(__dirname, '../../firebase-config.json');

admin.initializeApp({
  credential: admin.credential.cert(configPath),
  databaseURL: 'https://test123456-56d2a.firebaseio.com',
});

module.exports = admin;
