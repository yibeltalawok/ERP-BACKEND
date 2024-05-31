// models/attendanceModel.js
const mongoose = require('mongoose');
const attendanceSchema = new mongoose.Schema({
  dateAttended: {
    type: Date,
    required: true
  },
  value: {
    type: String,
    required: true
  },
  lateMinutes: {
    type: String,
    default: "0"
  },
  slValue: {
    type: String,
    default: "1"
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
