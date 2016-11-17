const express = require('express');
const router = express.Router();
const authMiddleware = require('../config/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
  res.send('SECRET!!!\n');
});

module.exports = router;
