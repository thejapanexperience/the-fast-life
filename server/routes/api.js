const express = require('express');
const router = express.Router();

router.use('/fasts', require('./fasts'));
router.use('/users', require('./users'));

module.exports = router;
