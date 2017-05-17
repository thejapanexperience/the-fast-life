const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Fast = require('../models/Fast');

router.post('/usercheck', (req, res) => {
  User.findOne({ email: req.body.result.user.email })
  .populate('fasts')
  .then((user) => {
    const response = { user, result: req.body.result };
    res.send(response);
  })
  .catch(err => res.status(400).send(err));
});

router.post('/getuserfromdb', (req, res) => {
  User.findOne({ email: req.body.email })
  .populate('fasts')
  .then((user) => {
    res.send(user);
  })
  .catch(err => res.status(400).send(err));
});

router.route('/')

.get((req, res) => {
  User.find({})
.then(allUsers => res.send(allUsers))
.catch(err => res.status(400).send(err));
})

.post((req, res) => {
  User.create(req.body.user)
.then(user => res.send(user))
.catch(err => res.status(400).send(err));
});

router.route('/:id')
.delete((req, res) => {
  User.findByIdAndRemove(req.params.id)
     .then(user => User.find({}))
     .then(allUsers => res.send(allUsers))
     .catch(err => res.status(400).send(err));
});

module.exports = router;
