const express = require('express');
const router = express.Router();

router.use('/secret', require('./secret'));

module.exports = router;
