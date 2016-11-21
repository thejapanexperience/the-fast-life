const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Fast = require('../models/Fast');


router.route('/')

  .post((req, res) => {
    Fast.create(req.body)
  .then(fast => User.findByIdAndUpdate(fast.user[0], { $push: { fasts: fast } }, { new: true }).populate('fasts'))
  .then((updatedUser) => {
    res.send(updatedUser);
  })
  .catch(err => res.status(400).send(err));
  })

  .put((req, res) => {
    const { updatedFast } = req.body;
    Fast.findByIdAndUpdate(updatedFast._id, updatedFast, { new: true })
    .then(fast => User.findOne({ _id: fast.user[0] }).populate('fasts'))
    .then(user => res.send(user))
    .catch(err => res.status(400).send(err));
  })

  .get((req, res) => {
    Fast.find({})
    .then(allFasts => res.send(allFasts))
    .catch(err => res.status(400).send(err));
  })

  .delete((req, res) => {
    Fast.remove({})
    .then(Fast.find({}))
    .then(allFasts => res.send(allFasts))
    .catch(err => res.status(400).send(err));
  });

router.route('/:id')
  .get((req, res) => {
    Fast.find({ user: [req.params.id] })
  .then(allFasts => res.send(allFasts))
  .catch(err => res.status(400).send(err));
  })

  .delete((req, res) => {
    Fast.findByIdAndRemove(req.params.id)
    .then(fast => User.findOne({ _id: fast.user[0] }).populate('fasts'))
    .then(user => res.send(user))
    .catch(err => res.status(400).send(err));
  });

module.exports = router;
