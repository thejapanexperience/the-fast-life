const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  displayName: { type: String },
  email: { type: String },
  photoURL: { type: String },
  uid: { type: String },
  fasts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Fast' }],
});

const User = mongoose.model('User', userSchema);

module.exports = User;
