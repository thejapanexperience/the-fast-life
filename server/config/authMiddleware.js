const admin = require('./firebaseAdmin');

module.exports = function (req, res, next) {
  const token = req.headers['x-auth-token'];
  console.log('token: ', token);
  admin.auth().verifyIdToken(token || '')
  .then((payload) => {
    next();
  })
  .catch(() => {
    res.status(401).send({ error: 'Must be authenticated' });
  });
};
