const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    caseSensitive: false,
    trim: true,
    minlength: 5,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    caseSensitive: false,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
   // required: true
  },
}, {
  timestamps: true,
});
const User = mongoose.model('User', userSchema);
module.exports = User;