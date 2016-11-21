const mongoose = require('mongoose');

const fastSchema = new mongoose.Schema({
  duration: { type: Number },
  linearProgress: { type: Number },
  endDate: { type: Date },
  startDate: { type: Date },
  status: { type: String },
  strategies: [{ type: String }],
  comments: [{ comment: { type: String }, date: { type: String } }],
  user: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

const Fast = mongoose.model('Fast', fastSchema);

module.exports = Fast;
