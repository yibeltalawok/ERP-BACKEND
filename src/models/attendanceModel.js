// models/attendanceModel.js
const Employee = require('./employeeModel');
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  dateAttended: {
    type: String,
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
  department: {
    type: String
  },
  fullName: {
    type: String
  }
});

// Define associations
// Attendance.belongsTo(Employee, { foreignKey: '' });
const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
