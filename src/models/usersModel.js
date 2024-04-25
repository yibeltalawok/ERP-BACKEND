
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'employee', 'inventory', 'supplier', 'customer', 'manager', 'officeManager','accountant']
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;