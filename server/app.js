const PORT = process.env.PORT || 8000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://thefastlifeuser:password@ds143081.mlab.com:43081/thefastlife';

const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const morgan = require('morgan');
const path = require('path');
const mongoose = require('mongoose');

// INITIALIZE SERVER
const app = express();
const server = require('http').createServer(app);

// MONGOOSE CONFIG
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, (err) => {
  console.log(err || `MongoDB connected to ${MONGODB_URI}`);
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

require('./config/webpack')(app);

app.use('/api', require('./routes/api'));

app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, '../public/index.html');
  res.sendFile(indexPath);
});

// START LISTENING
server.listen(PORT, (err) => {
  console.log(err || `Express listening on port ${PORT}`);
});
